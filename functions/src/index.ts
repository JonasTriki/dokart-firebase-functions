import * as functions from "firebase-functions";
import {
  sendFeedbackHandler,
  syncToiletsHandler,
  apiHandler,
} from "./handlers";

export const sendFeedback = functions
  .region("europe-west2")
  .https.onRequest(sendFeedbackHandler);

// Synchronization of toilets are available through the
// Firebase SDK or called every 24 hours
export const syncToilets = functions
  .region("europe-west2")
  .https.onRequest(async (req, res) => {
    try {
      await syncToiletsHandler();
      res.send({
        status: "ok",
      });
    } catch (ex) {
      res.status(500).send({
        status: "error",
        error: ex,
      });
    }
  });
export const syncToiletsScheduled = functions
  .region("europe-west2")
  .pubsub.schedule("0 3 * * 0") // Every Sunday at 3 am
  .timeZone("Europe/Oslo")
  .onRun(async (context) => {
    await syncToiletsHandler();
  });

// Expose Apollo GraphQl server
export const api = functions.region("europe-west2").https.onRequest(apiHandler);
