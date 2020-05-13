import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import { firebaseConfig } from "./firebaseConfig";
import {IUniversity} from '../../functions/src/interfaces';
import {createList, createUniversityGroup, toggleLoading} from './createDom';
// import { Observable } from 'rxjs';
const app = firebase.initializeApp(firebaseConfig);
const db = app.database();
import FilterProxy from './Filter.class';

async function init() {
    const data = (await db.ref('/university').once('value')).val();
    const uni:IUniversity[] = Object.values(data);
    FilterProxy.items = uni;

    const countries = [...new Set(uni.map(item => item.country))];

    const spec = [...new Set(uni.map(item => item.detail.speciality)
        .reduce((acc, val) => acc.concat(val)))];

    createUniversityGroup(FilterProxy.filter())
    createList(countries, FilterProxy, 'countries', 'countries');
    createList(spec, FilterProxy, 'spec', 'spec');


    toggleLoading();


}

init();











