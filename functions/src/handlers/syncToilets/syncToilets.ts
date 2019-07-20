import * as functions from 'firebase-functions'
import { fetchAllToilets } from './citites';

const syncToilets = async (request: functions.https.Request, response: functions.Response) => {
    console.log("Synchronizing toilets…")

    try {
        const allToilets = await fetchAllToilets()
        for (let ct of allToilets) {
            console.log(`--${ct.city}--`)
            for (let toilet of ct.toilets) {
                console.log(JSON.stringify(toilet))
            }
        }

        // TODO: Perform the synchronization with Firestore
        response.send('ok')
    } catch (err) {
        console.log("Error synchronizing toilets: ", err)
    }

    console.log("Toilets synchronized!")
}

export default syncToilets