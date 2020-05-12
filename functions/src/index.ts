import * as functions from "firebase-functions";
import { getUniversities } from "./api";
import * as serviceAccount from './projectkey.json'
const admin = require("firebase-admin");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://graphviz-ce66e.firebaseio.com"
});

const refUniversity = '/university'


export const helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello');
});

export const updateUniversitiesInfo = functions.https.onRequest(async (req, res) => {
    const universities = await getUniversities(44);
    await app.database().ref(refUniversity).remove();
    // tslint:disable-next-line: prefer-const
    for(let item of universities) {
      await app.database().ref(refUniversity).push(item);
    }    
    res.status(200).send();
});


