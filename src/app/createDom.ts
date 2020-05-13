import { IUniversity } from "../../functions/src/interfaces";

const universitiesNode = document.getElementById('universitiesNode');
//TODO: FIX any
function createNode(tag: string, options:any ) {
    return Object.assign(document.createElement(tag), options);
}

function toggleClass(classname) {
    this.className.includes(classname) 
        ? this.classList.remove(classname)
        : this.classList.add(classname);
}

export function toggleLoading() {
    const app = document.getElementById('app');
    const spinner = document.getElementById('spinner');
    toggleClass.call(app, 'd-none');
    toggleClass.call(spinner, 'd-none');
}

function createCountryCard(el:IUniversity) {
    var card = createNode('div', {className: 'card'});
    var img = createNode('img', {className: 'card-img-top'});

    var cardBody = createNode('div', {className: 'card-body'});

    [
        { tag: 'h5', options: {innerHTML: el.name}},
        { tag: 'p', options: {innerHTML: `${el.city} in ${el.country}` , className: 'card-text', }},
        { tag: 'p', options: {innerHTML: el.stars + ' stars'}},
        { tag: 'a', options: {href: '#', className: 'btn btn-primary', innerHTML: 'More information'}}
    ].forEach(el => {
        cardBody.appendChild(createNode(el.tag, el.options));
    });
    
    card.appendChild(img);
    card.appendChild(cardBody);
    return card;
}

export function createUniversityGroup(univers) {
    // let groups = [];
    // let groupSize = 6;
    let cardGroupClass = 'card-columns';
    universitiesNode.innerHTML = '';

    // for(let i = 0; i < univers.length; i+=groupSize ) {
    //     groups.push(univers.slice(i, i+groupSize));
    // }
    let cardGroupNode = createNode('div', {className: cardGroupClass, style: 'margin-top: 30px'});
    univers.forEach(univerNode => {
        
        // univerNodesGroup.forEach(univerNode=> {
            // cardGroupNode.appendChild(createCountryCard(univerNode));
        // });
        cardGroupNode.appendChild(createCountryCard(univerNode));
    });
    universitiesNode.appendChild(cardGroupNode);
}

export function createList(arr, FilterProxy, propName, nodeId) {
    const handler = function(e:MouseEvent) {
        e.preventDefault();
        let filter = this.getAttribute('data-js');
        toggleClass.call(this, 'active');
        FilterProxy[propName] = filter; //starts rebuilding
    }

    arr.forEach((val) => {
        const node = createNode('li', {
            className: 'list-group-item list-group-item-action',
            innerHTML: val,
            onclick: handler,
        })
        node.setAttribute('data-js', val);

        document.getElementById(nodeId).appendChild(node);
    });
}