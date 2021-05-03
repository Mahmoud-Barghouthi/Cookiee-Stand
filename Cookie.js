/* eslint-disable no-empty */
/* eslint-disable indent */
'use strict';

/* we need to calculate the following
1. making random function that would give us two values
2. we need to store the random values in an array by creating a customer in the obj
3. cookies per hour and its average
4. create unorderlist with the total
*/

let workHour = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

//Location Seattle

let seattle = {
    name: 'Seattle',
    minOfCust: 23,
    maxOfCust: 65,
    cookies: 6.3,
    cusPerHour: [],
    coPerHour: [],
    total:0,
    customerPerHour: function () {
        for (let i = 0; i < workHour.length; i++) {
            //   this.cusPerHour[i] = random (this.minOfCust, this.maxOfCust);
            this.cusPerHour[i] = random(23, 65);

        }
    },

    cookiesPerHour: function () {
        for (let i = 0; i < workHour.length; i++) {
            this.coPerHour[i] = Math.floor(this.cusPerHour[i] + this.cookies);
            this.total = this.total + this.coPerHour[i];
        }
    },
     //read the readme.md files please 
    renderFunction: function () {
        let div = document.getElementById('cookies');
        //header means the location
        let header = document.createElement('h2');
        div.appendChild(header);
        header.textContent = this.name;

        // to have 14 unorder list we  need to do a foor loop
        let ul = document.createElement('ul');
        div.appendChild(ul);
        for (let i = 0; i < workHour.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${workHour[i]} ${this.coPerHour[i]} Cookies`;
        }

        let li1 = document.createElement('li');
            ul.appendChild(li1);
            li1.textContent= `Total : ${this.total} cookies`;



        console.log(div);

    }
};


//the random function has to be outside in order to be global
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log(seattle);
seattle.customerPerHour();
seattle.cookiesPerHour();
seattle.renderFunction();


//Tokyo 

let tokyo = {
    name: 'Tokyo',
    minOfCust: 23,
    maxOfCust: 65,
    cookies: 6.3,
    cusPerHour: [],
    coPerHour: [],
    total:0,
    customerPerHour: function () {
        for (let i = 0; i < workHour.length; i++) {
            //   this.cusPerHour[i] = random (this.minOfCust, this.maxOfCust);
            this.cusPerHour[i] = random(23, 65);

        }
    },

    cookiesPerHour: function () {
        for (let i = 0; i < workHour.length; i++) {
            this.coPerHour[i] = Math.floor(this.cusPerHour[i] + this.cookies);
            this.total = this.total + this.coPerHour[i];
        }
    },
     //read the readme.md files please 
    renderFunction: function () {
        let div = document.getElementById('cookies');
        //header means the location
        let header = document.createElement('h2');
        div.appendChild(header);
        header.textContent = this.name;

        // to have 14 unorder list we  need to do a foor loop
        let ul = document.createElement('ul');
        div.appendChild(ul);
        for (let i = 0; i < workHour.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${workHour[i]} ${this.coPerHour[i]} Cookies`;
        }

        let li1 = document.createElement('li');
            ul.appendChild(li1);
            li1.textContent= `Total : ${this.total} cookies`;



        console.log(div);

    }
};


//the random function has to be outside in order to be global
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log(tokyo);
tokyo.customerPerHour();
tokyo.cookiesPerHour();
tokyo.renderFunction();

//Location Dubai

let dubai = {
    name: 'Dubai',
    minOfCust: 23,
    maxOfCust: 65,
    cookies: 6.3,
    cusPerHour: [],
    coPerHour: [],
    total:0,
    customerPerHour: function () {
        for (let i = 0; i < workHour.length; i++) {
            //   this.cusPerHour[i] = random (this.minOfCust, this.maxOfCust);
            this.cusPerHour[i] = random(23, 65);

        }
    },

    cookiesPerHour: function () {
        for (let i = 0; i < workHour.length; i++) {
            this.coPerHour[i] = Math.floor(this.cusPerHour[i] + this.cookies);
            this.total = this.total + this.coPerHour[i];
        }
    },
     //read the readme.md files please 
    renderFunction: function () {
        let div = document.getElementById('cookies');
        //header means the location
        let header = document.createElement('h2');
        div.appendChild(header);
        header.textContent = this.name;

        // to have 14 unorder list we  need to do a foor loop
        let ul = document.createElement('ul');
        div.appendChild(ul);
        for (let i = 0; i < workHour.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${workHour[i]} ${this.coPerHour[i]} Cookies`;
        }

        let li1 = document.createElement('li');
            ul.appendChild(li1);
            li1.textContent= `Total : ${this.total} cookies`;



        console.log(div);

    }
};


//the random function has to be outside in order to be global
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log(dubai);
dubai.customerPerHour();
dubai.cookiesPerHour();
dubai.renderFunction();


//Location paris

let paris = {
    name: 'Paris',
    minOfCust: 23,
    maxOfCust: 65,
    cookies: 6.3,
    cusPerHour: [],
    coPerHour: [],
    total:0,
    customerPerHour: function () {
        for (let i = 0; i < workHour.length; i++) {
            //   this.cusPerHour[i] = random (this.minOfCust, this.maxOfCust);
            this.cusPerHour[i] = random(23, 65);

        }
    },

    cookiesPerHour: function () {
        for (let i = 0; i < workHour.length; i++) {
            this.coPerHour[i] = Math.floor(this.cusPerHour[i] + this.cookies);
            this.total = this.total + this.coPerHour[i];
        }
    },
     //read the readme.md files please 
    renderFunction: function () {
        let div = document.getElementById('cookies');
        //header means the location
        let header = document.createElement('h2');
        div.appendChild(header);
        header.textContent = this.name;

        // to have 14 unorder list we  need to do a foor loop
        let ul = document.createElement('ul');
        div.appendChild(ul);
        for (let i = 0; i < workHour.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${workHour[i]} ${this.coPerHour[i]} Cookies`;
        }

        let li1 = document.createElement('li');
            ul.appendChild(li1);
            li1.textContent= `Total : ${this.total} cookies`;



        console.log(div);

    }
};


//the random function has to be outside in order to be global
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log(paris);
paris.customerPerHour();
paris.cookiesPerHour();
paris.renderFunction();

//Location Lima

let lima = {
    name: 'Lima',
    minOfCust: 23,
    maxOfCust: 65,
    cookies: 6.3,
    cusPerHour: [],
    coPerHour: [],
    total:0,
    customerPerHour: function () {
        for (let i = 0; i < workHour.length; i++) {
            //   this.cusPerHour[i] = random (this.minOfCust, this.maxOfCust);
            this.cusPerHour[i] = random(23, 65);

        }
    },

    cookiesPerHour: function () {
        for (let i = 0; i < workHour.length; i++) {
            this.coPerHour[i] = Math.floor(this.cusPerHour[i] + this.cookies);
            this.total = this.total + this.coPerHour[i];
        }
    },
     //read the readme.md files please 
    renderFunction: function () {
        let div = document.getElementById('cookies');
        //header means the location
        let header = document.createElement('h2');
        div.appendChild(header);
        header.textContent = this.name;

        // to have 14 unorder list we  need to do a foor loop
        let ul = document.createElement('ul');
        div.appendChild(ul);
        for (let i = 0; i < workHour.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${workHour[i]} ${this.coPerHour[i]} Cookies`;
        }

        let li1 = document.createElement('li');
            ul.appendChild(li1);
            li1.textContent= `Total : ${this.total} cookies`;



        console.log(div);

    }
};


//the random function has to be outside in order to be global
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log(lima);
lima.customerPerHour();
lima.cookiesPerHour();
lima.renderFunction();


