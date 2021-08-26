import * as admin from "firebase-admin";
import * as serviceAccount from "./service-account.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: "https://dokart-ea587.firebaseio.com",
});

export default admin;
