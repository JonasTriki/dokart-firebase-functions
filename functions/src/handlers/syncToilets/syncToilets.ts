import { fetchAllToilets } from './communes';
import admin from '../../admin'

const firestore = admin.firestore()
const toiletsCol = firestore.collection("toilets")

async function syncToilets() {
    console.log("Synchronizing toilets…")

    const fetchedToilets = await fetchAllToilets()
    const firestoreToiletsSnapshot = await toiletsCol.get()
    const firestoreToilets = firestoreToiletsSnapshot.docs

    const work = fetchedToilets.map(async (toilet) => {
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

    // Do the work!
    await Promise.all(work)

    console.log("Toilets synchronized!")
}

export default syncToilets