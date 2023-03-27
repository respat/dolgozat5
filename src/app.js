/*
* File: app.js
* Author: Resperger Patrik
* Copyright: 2023, Resperger Patrik
* Group: Szoft I/1/E
* Date: 2023-03-25
* Github: https://github.com/respat/
* Licenc: GNU GPL
*/

let ships = [];


window.addEventListener('load', () => {
    init();
    getShips();
});



function init() {
    const tbody = document.querySelector('#tbody');
};

function getShips() {
    let host = 'http://localhost:8000/';
    let endpoint = 'ships'
    let url = host + endpoint;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            ships = result;
            render();
        });

};


function render() {
    ships.forEach((ship) => {
        console.log('hello')
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdLength = document.createElement('td');
        let tdPrice = document.createElement('td');
        let tdPerson = document.createElement('td');
        let tdTrailer = document.createElement('td');
        tdName.textContent = ship.name;
        tdName.classList.add('name')
        tdLength.textContent = ship.length;
        tdPrice.textContent = ship.price + " HUF";
        tdPerson.textContent = ship.person;
        tdTrailer.textContent = ship.trailer;
        tbody.append(tr);
        tr.append(tdName);
        tr.append(tdLength);
        tr.append(tdPrice);
        tr.append(tdPerson);
        tr.append(tdTrailer);

    });
}