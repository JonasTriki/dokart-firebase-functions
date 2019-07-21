import * as functions from 'firebase-functions'
import { fetchAllToilets, CityToilets } from './citites';
import admin from '../../admin'

const firestore = admin.firestore()
const cities = firestore.collection("cities")

async function syncCityToilets({ city, toilets }: CityToilets) {
    console.log(`Synchronizing ${city}`)
    try {

        // Make sure the city exists
        const cityDoc = await cities.doc(city).get()
        if (!cityDoc.exists) {
            await cities.doc(city).create({})
        }

        const toiletsCol = cities.doc(city).collection("toilets")
        const firestoreToiletsResult = await toiletsCol.get()
        const firestoreToilets = firestoreToiletsResult.docs

        const work = toilets.map(async (toilet) => {
            const firestoreToilet = firestoreToilets
                .find(snapshot => {
                    const { latitude, longitude } = snapshot.data()
                    return toilet.latitude === latitude && toilet.longitude === longitude
                })

            if (firestoreToilet) {

                // Firestore toilet already exists, update it
                return firestoreToilet.ref.update(toilet)
            } else {

                // Firestore toilet does not exist, create it
                return toiletsCol.add(toilet)
            }
        })

        // Perform the work in Firestore
        await Promise.all(work)
    } catch (err) {
        console.log(`Error synchronizing toilets in ${city}: `, err)
    }
}

async function syncToilets(request: functions.https.Request, response: functions.Response) {
    console.log("Synchronizing toilets…")

    const allToilets = await fetchAllToilets()

    // Wait for the sync to finish for all cities
    await Promise.all(allToilets.map(syncCityToilets))

    console.log("Toilets synchronized!")
}

export default syncToilets