import * as functions from 'firebase-functions';
import { sendFeedbackHandler, syncToiletsHandler } from './handlers'

export const sendFeedback = functions.region("europe-west2").https.onRequest(sendFeedbackHandler)

// Synchronization of toilets are available through the Firebase SDK or called every 24 hours
export const syncToilets = functions.region("europe-west2").https.onRequest(async (req, res) => {
    await syncToiletsHandler()
    res.send({ status: "ok" })
})
export const syncToiletsScheduled = functions.region("europe-west2").pubsub
    .schedule("0 3 * * *") // Every day at 3 am
    .timeZone("Europe/Oslo")
    .onRun(async (context) => { await syncToiletsHandler() });