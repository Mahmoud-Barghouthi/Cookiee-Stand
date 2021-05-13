
/* eslint-disable eqeqeq */
'use strict';

//Constructor

let workHours = ['6:00  AM ', '7:00  AM', '8:00  AM', '9:00  AM', '10:00  AM', '11:00 AM', '12 PM', '13:00 PM', '14:00 PM', '15:00 PM', '16:00 PM', '17:00 PM', '18:00 PM'];
let hourStore=[];
let allSum=[];

function CookiesStore(name, min, max, avg) {
  let sale=[] , sum=0;
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.sale=sale;
  this.sum=sum;
}

//--------------------------------------------------
CookiesStore.prototype.cusPerHour = function () {
  return Math.floor((Math.random() * ((this.max) - (this.min)) + this.min)*this.avg);
};


CookiesStore.prototype.process = function () {
  let NumOfCookies;
  for (let i = 0; i < workHours.length; i++) {
    NumOfCookies=Math.floor((Math.random() * ((this.max) - (this.min)) + this.min)*this.avg);
    this.sum+=NumOfCookies;
    this.sale.push(NumOfCookies);
    hourStore[i]=this.sale[i];

  }

  this.sale.push(this.sum);
  //--------------------------------------------------

  if(allSum.length==0)
  {
    allSum=this.sale;
    console.log(allSum);
  }
  else
  {
    for (let i = 0; i < this.sale.length; i++) {

      allSum[i]=allSum[i]+this.sale[i];

    }
  }

};
//--------------------------------------------------


function render ()
{
  let th=[];
  let theParent=document.getElementById('cookies');
  let table=document.createElement('table');
  theParent.appendChild(table);
  table.setAttribute('id','salesTable');
  //-------------------------------------------------------
  let tr1=document.createElement('tr');
  table.appendChild(tr1);
  //--------------------------------------------------
  let row1=document.createElement('th');
  tr1.appendChild(row1);
  //--------------------------------------------------
  row1.textContent='City Name';
  for(let i=0;i<workHours.length;i++)
  {
    th[i]=document.createElement('th');
    tr1.appendChild(th[i]);
    th[i].textContent=workHours[i];

  }
  let th2=document.createElement('th');
  tr1.appendChild(th2);
  th2.textContent='Daily Location Total';
}

render();
//--------------------------------------------------

CookiesStore.prototype.render = function () {
  let td=[];

  let parent=document.getElementById('salesTable');
  let tr=document.createElement('tr');

  let tdFirst=document.createElement('td');
  tr.appendChild(tdFirst);
  tdFirst.textContent=this.name;

  parent.appendChild(tr);
  for(let i=0; i<this.sale.length;i++)
  {
    td[i]=document.createElement('td');
    tr.appendChild(td[i]);
    td[i].textContent=this.sale[i];
  }
};

//--------------------------------------------------

function total()
{
  let td = [];
  let parent=document.getElementById('salesTable');
  let tr=document.createElement('tr');
  parent.appendChild(tr);
  let tdFirst=document.createElement('td');
  tr.appendChild(tdFirst);
  tdFirst.textContent='Total';
  for (let i = 0; i < allSum.length; i++) {
    td[i]=document.createElement('td');
    tr.appendChild(td[i]);
    td[i].textContent=allSum[i];

  }
}

let Seattle = new CookiesStore('Seattle', 23, 65, 6.3);
Seattle.process();
Seattle.render();

let Tokyo = new CookiesStore('Tokyo', 3, 24, 1.2);
Tokyo.process();
Tokyo.render();

let Dubai = new CookiesStore('Dubai', 11, 38, 3.7);
Dubai.process();
Dubai.render();

let Paris = new CookiesStore('Paris', 20, 38, 2.3);
Paris.process();
Paris.render();

let Lima = new CookiesStore('Lima', 2, 16, 4.6);
Lima.process();
Lima.render();

total();

// Literal
/* we need to calculate the following
1. making random function that would give us two values
2. we need to store the random values in an array by creating a customer in the obj
3. cookies per hour and its average
4. create unorderlist with the total
*/
/*
let workHour = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

//Location Seattle

let seattle = {
    name: 'Seattle',
    minOfCust: 23,
    maxOfCust: 65,
    cookies: 6.3,
    cusPerHour: [],
    coPerHour: [],
    total: 0,

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
        // let bHeader = document.createElement('h1');
        // div.appendChild(bHeader);
        // bHeader.textContent = this.welcome;   Ask one of the TA or Ms. Baraah about that


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
        li1.textContent = `Total : ${this.total} cookies`;



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
    minOfCust: 3,
    maxOfCust: 24,
    cookies: 1.2,
    cusPerHour: [],
    coPerHour: [],
    total: 0,
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
        li1.textContent = `Total : ${this.total} cookies`;



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
    minOfCust: 11,
    maxOfCust: 38,
    cookies: 3.7,
    cusPerHour: [],
    coPerHour: [],
    total: 0,
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
        li1.textContent = `Total : ${this.total} cookies`;



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
    minOfCust: 20,
    maxOfCust: 38,
    cookies: 2.3,
    cusPerHour: [],
    coPerHour: [],
    total: 0,
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
        li1.textContent = `Total : ${this.total} cookies`;



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
    minOfCust: 2,
    maxOfCust: 16,
    cookies: 4.6,
    cusPerHour: [],
    coPerHour: [],
    total: 0,
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
        li1.textContent = `Total : ${this.total} cookies`;



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

*/
