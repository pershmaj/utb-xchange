import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import { firebaseConfig } from "./firebaseConfig";
import {IUniversity} from '../../functions/src/interfaces';
import {createCountyList} from './createDom';
// import { Observable } from 'rxjs';
const app = firebase.initializeApp(firebaseConfig);
const db = app.database();

async function init() {
    const data = (await db.ref('/university').once('value')).val();
    const uni:IUniversity[] = Object.values(data);

    const countries = [...new Set(uni.map(item => item.country))];

    createCountyList(countries);


}

init();











