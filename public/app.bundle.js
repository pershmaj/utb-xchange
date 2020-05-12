webpackJsonp([0],{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(136);
__webpack_require__(338);
module.exports = __webpack_require__(344);


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = __webpack_require__(339);
__webpack_require__(340);
__webpack_require__(347);
var firebaseConfig_1 = __webpack_require__(343);
var createDom_1 = __webpack_require__(350);
// import { Observable } from 'rxjs';
var app = firebase.initializeApp(firebaseConfig_1.firebaseConfig);
var db = app.database();
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var data, uni, countries;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db.ref('/university').once('value')];
                case 1:
                    data = (_a.sent()).val();
                    uni = Object.values(data);
                    countries = __spread(new Set(uni.map(function (item) { return item.country; })));
                    createDom_1.createCountyList(countries);
                    return [2 /*return*/];
            }
        });
    });
}
init();


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseConfig = void 0;
exports.firebaseConfig = {
    apiKey: "AIzaSyCD0w3MQyetO4C0fhSt7627O9qis_M40-g",
    authDomain: "graphviz-ce66e.firebaseapp.com",
    databaseURL: "https://graphviz-ce66e.firebaseio.com",
    projectId: "graphviz-ce66e",
    storageBucket: "graphviz-ce66e.appspot.com",
    messagingSenderId: "138186212504",
    appId: "1:138186212504:web:a264ef59a284a2e917bced",
    measurementId: "G-Z0C5W5WX25"
};


/***/ }),

/***/ 344:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createCountyList = void 0;
var universitiesNode = document.getElementById('universitiesNode');
//TODO: FIX any
function createNode(tag, options) {
    return Object.assign(document.createElement(tag), options);
}
function createCountryCard(el) {
    var card = createNode('div', { className: 'card', style: 'max-width: 18rem;' });
    var img = createNode('img', { src: el.querySelector('img').src, className: 'card-img-top' });
    var cardBody = createNode('div', { className: 'card-body' });
    [
        { tag: 'h5', options: { innerHTML: el.querySelector('h3').innerHTML, style: 'height: 48px' } },
        { tag: 'p', options: { innerHTML: '', className: 'card-text', } },
        { tag: 'p', options: { innerHTML: el.querySelectorAll('.icon-star-1.active').length + ' stars' } },
        { tag: 'a', options: { href: '#', className: 'btn btn-primary', innerHTML: 'More information' } }
    ].forEach(function (el) {
        cardBody.appendChild(createNode(el.tag, el.options));
    });
    card.appendChild(img);
    card.appendChild(cardBody);
    return card;
}
function createUniversityGroup(univers) {
    var groups = [];
    var groupSize = 6;
    var cardGroupClass = 'card-deck';
    universitiesNode.innerHTML = '';
    for (var i = 0; i < univers.length; i += groupSize) {
        groups.push(univers.slice(i, i + groupSize));
    }
    groups.forEach(function (univerNodesGroup) {
        var cardGroupNode = createNode('div', { className: cardGroupClass, style: 'margin-top: 30px' });
        univerNodesGroup.forEach(function (univerNode) {
            cardGroupNode.appendChild(createCountryCard(univerNode));
        });
        universitiesNode.append(cardGroupNode);
    });
}
function handleCountryClick(e) {
    e.preventDefault();
    var countryfilter = this.getAttribute('data-js-country');
    var univers = [];
    createUniversityGroup(univers);
}
function createCountyList(countries) {
    countries.forEach(function (val) {
        var node = createNode('li', {
            className: 'list-group-item list-group-item-action',
            innerHTML: val,
            onclick: handleCountryClick,
        });
        node.setAttribute('data-js-country', val);
        document.getElementById('countries').appendChild(node);
    });
}
exports.createCountyList = createCountyList;


/***/ })

},[135]);
//# sourceMappingURL=app.bundle.js.map