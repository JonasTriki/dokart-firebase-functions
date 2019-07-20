import * as functions from 'firebase-functions';
import { sendFeedbackHandler, syncToiletsHandler } from './handlers'

export const sendFeedback = functions.https.onRequest(sendFeedbackHandler)
export const syncToilets = functions.https.onRequest(syncToiletsHandler)