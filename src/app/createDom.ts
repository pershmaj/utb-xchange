const universitiesNode = document.getElementById('universitiesNode');
//TODO: FIX any
function createNode(tag: string, options:any ) {
    return Object.assign(document.createElement(tag), options);
}

function createCountryCard(el) {
    var card = createNode('div', {className: 'card', style: 'max-width: 18rem;'});
    var img = createNode('img', {src: el.querySelector('img').src, className: 'card-img-top'});

    var cardBody = createNode('div', {className: 'card-body'});

    [
        { tag: 'h5', options: {innerHTML: el.querySelector('h3').innerHTML, style: 'height: 48px'}},
        { tag: 'p', options: {innerHTML: '', className: 'card-text', }},
        { tag: 'p', options: {innerHTML: el.querySelectorAll('.icon-star-1.active').length + ' stars'}},
        { tag: 'a', options: {href: '#', className: 'btn btn-primary', innerHTML: 'More information'}}
    ].forEach(el => {
        cardBody.appendChild(createNode(el.tag, el.options));
    });
    
    card.appendChild(img);
    card.appendChild(cardBody);
    return card;
}

function createUniversityGroup(univers) {
    let groups = [];
    let groupSize = 6;
    let cardGroupClass = 'card-deck';
    universitiesNode.innerHTML = '';

    for(let i = 0; i < univers.length; i+=groupSize ) {
        groups.push(univers.slice(i, i+groupSize));
    }
    groups.forEach(univerNodesGroup => {
        let cardGroupNode = createNode('div', {className: cardGroupClass, style: 'margin-top: 30px'});
        univerNodesGroup.forEach(univerNode=> {
            cardGroupNode.appendChild(createCountryCard(univerNode));
        });
        universitiesNode.append(cardGroupNode);
    });
}

function handleCountryClick(e:MouseEvent) {
    e.preventDefault();

    let countryfilter = this.getAttribute('data-js-country');
    
    
    var univers = [];

    createUniversityGroup(univers);
   
}

export function createCountyList(countries) {
    
    countries.forEach((val) => {
        const node = createNode('li', {
            className: 'list-group-item list-group-item-action',
            innerHTML: val,
            onclick: handleCountryClick,
        })
        node.setAttribute('data-js-country', val);

        document.getElementById('countries').appendChild(node);
    });
}