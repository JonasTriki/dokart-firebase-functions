import { fetchAllToilets } from "./communes";
import admin from "../../admin";

const firestore = admin.firestore();
firestore.settings({ ignoreUndefinedProperties: true });
const toiletsCol = firestore.collection("toilets");

async function syncToilets(): Promise<void> {
  console.log("Synchronizing toilets…");
  const fetchedToilets = await fetchAllToilets();
  const firestoreToiletsSnapshot = await toiletsCol.get();
  const firestoreToilets = firestoreToiletsSnapshot.docs;
  console.log("Toilets: " + firestoreToilets.length.toString());

  // Set toilets in a batch
  const batch = firestore.batch();
  for (const toilet of fetchedToilets) {
    const firestoreToilet = firestoreToilets.find((snapshot) => {
      const { latitude, longitude } = snapshot.data();
      return toilet.latitude === latitude && toilet.longitude === longitude;
    });

    // Add to batch
    const firestoreToiletRef = firestoreToilet ?
      firestoreToilet.ref :
      toiletsCol.doc();
    batch.set(firestoreToiletRef, toilet);
  }

  // Commit the batch
  console.log("Committing toilet batch...");
  await batch.commit();

  console.log("Toilets synchronized!");
}

export default syncToilets;
