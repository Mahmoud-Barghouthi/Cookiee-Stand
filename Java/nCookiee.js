/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
'user strict';
let hour = ['06 AM ', '07 AM ', '08 AM ', '09 AM ', '10 AM ', '11 AM ', '12 PM ', '01 PM ', '02 PM ', '03 PM ', '04 PM ', '05 PM ', '06 PM ', '07 PM '];
let footer1 = document.createElement('tr');

let shopsName = [];

function SalmonCookies(names, mincust, maxcust, avgCookies) {
    this.names = names;
    this.mincust = mincust;
    this.maxcust = maxcust;
    this.avgCookies = avgCookies;
    this.randomCus = [];
    this.avgCookiesPerHour = [];
    this.total = 0;
    //we used push to push auto all the new created object to a global arry.

    shopsName.push(this);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//prototype, we use this to add a function outside the object
SalmonCookies.prototype.calculateRandomCus = function () {
    // we need to create a for loop to calculate the hours with the customers
    for (let i = 0; i < hour.length; i++) {
        //to push all the random numbers to random customer array
        this.randomCus.push(Math.floor(randomNumber(this.mincust, this.maxcust)));
    }
    // console.log('the random numbers are ' + this.randomCus);
};

SalmonCookies.prototype.calculateCookiesHour = function () {
    for (let i = 0; i < hour.length; i++) {
        this.avgCookiesPerHour.push(Math.floor(this.avgCookies * this.randomCus[i]));
        this.total = this.total + this.avgCookiesPerHour[i];
    }
};

//in Order to call the function for the prototype, we need to create new names location
let Seattle = new SalmonCookies('Seattle', 23, 65, 6.3);
// Seattle.calculateRandomCus();
// Seattle.calculateCookiesHour();

let Tokyo = new SalmonCookies('Tokyo', 3, 24, 1.2);
// Tokyo.calculateRandomCus();
// Tokyo.calculateCookiesHour();

let Dubai = new SalmonCookies('Dubai', 11, 38, 3.7);
// Dubai.calculateRandomCus();
// Dubai.calculateCookiesHour();

let Paris = new SalmonCookies('Paris', 20, 38, 2.3);
// Paris.calculateRandomCus();
// Paris.calculateCookiesHour();

let Lima = new SalmonCookies('Lima', 2, 16, 4.6);
// Lima.calculateRandomCus();
// Lima.calculateCookiesHour();


let cookies = document.getElementById('cookies');
// console.log(cookies);
let table = document.createElement('table');
cookies.appendChild(table);

// console.log(cookies);

// let tr= document.createElement('tr');
// table.appendChild(tr);
// console.log(cookies);
// let th=document.createElement('th');
// tr.appendChild(th);
// console.log('The header is ' + th);
// th.textContent='';

// for (let i = 0; i < hour.length; i++) {
// let td = document.createElement('td');
// tr.appendChild(td); 
// console.log (td);  
// th.textContent = hour[i];
// }

function emptyHeader() {
    let th = document.createElement('tr');
    table.appendChild(th);

    let th1 = document.createElement('th');
    th.appendChild(th1);
    th1.textContent = 'Names / Hour';

    for (let i = 0; i < hour.length; i++) {
        let th2 = document.createElement('th');
        th.appendChild(th2);
        console.log(th2);
        th2.textContent = hour[i];
    }
    let th3 = document.createElement('th');
    th.appendChild(th3);
    th3.textContent = ' Daily Location Total';
}
emptyHeader();

SalmonCookies.prototype.bodytable = function () {
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let nShop = document.createElement('td');
    tr.appendChild(nShop);
    nShop.textContent = this.names;

    for (let i = 0; i < hour.length; i++) {
        let total1 = document.createElement('td');
        tr.appendChild(total1);
        total1.textContent = this.avgCookiesPerHour[i];
        
    }
    let total1 = document.createElement('td');
    tr.appendChild(total1);
    total1.textContent = this.total;

};

for (let i = 0; i < shopsName.length; i++) {
    shopsName[i].calculateRandomCus();
    shopsName[i].calculateCookiesHour();
    shopsName[i].bodytable();

}

let form = document.getElementById('form1');
form.addEventListener('submit', addstore);
function addstore(event) {
    event.preventDefault();
    let location1 = event.target.Location.value;
    let Cookies1 = event.target.Cookie.value;
    let Minimum1 = event.target.Minimum.value;
    let Maximum1 = event.target.Maximum.value;
    let store1 = new SalmonCookies(location1, Minimum1, Maximum1, Cookies1);
    store1.calculateRandomCus();
    store1.calculateCookiesHour();
    footer1.remove();
    store1.bodytable();
    console.log(location1, Cookies1, Minimum1, Maximum1);
    footer();
}

function footer() {
    table.appendChild(footer1);

    let footer2 = document.createElement('th');
    footer1.appendChild(footer2);
    footer2.textContent = 'Totals';

    for (let i = 0; i < hour.length; i++) {
        let totalEachHour = 0;
        for (let j = 0; j < shopsName.length; j++) {
            totalEachHour = totalEachHour + shopsName[j].avgCookiesPerHour[i];
        }
        let footerTotal = document.createElement('th');
        footer1.appendChild(footerTotal);
        footerTotal.textContent = totalEachHour;
    }
}
footer();




