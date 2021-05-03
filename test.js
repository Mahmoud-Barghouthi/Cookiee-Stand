'use strict';

//I want to create a parent
// I DID Create a PARENT
let cName = 'you are number 1';
let cars = ['BMW', 'Merc', 'Volvo', 'Nissan', 'Mazda', 'Saab'];




console.log('the arry lenght is ' + cars.length);


let div = document.getElementById('I am the parent');
// after each create, you have to append
let header= document.createElement('h1');
div.appendChild(header);
console.log(div);
header.textContent = 'Hello World' + ' ' + cName;

let header2 = document.createElement('h2');
div.appendChild(header2);
console.log(header2);
header2.textContent = `this is my world ${cName}`;

let article = document.createElement('article');
div.appendChild(article);
console.log(article);
article.textContent= 'Hello world  2';


let orderList = document.createElement('ol');
div.appendChild(orderList);
console.log(orderList);


for (let x = 0; x < cars.length ; x++) {
  let listItem = document.createElement('li');
  orderList.appendChild(listItem);
  listItem.textContent = cars[x];

}
// let listItem = document.createElement('li');
// orderList.appendChild(listItem);
// console.log(listItem);
// listItem.textContent = '1.hello world el world';





// let x = doc.createelementbyid('z')


/*<div id="I am the parent"> </div>
    <h1>
        Hello world
    </h1>
    <h2>
        this is my world
    </h2>
    <article>Hello world 2</article>
    <ol>
        <li>1.hello world el world</li>
    </ol>
    */




















// let div = document.getElementById('cookies');
//         //header means the location
//         let header = document.createElement('h2');
//         div.appendChild(header);
//         header.textContent = this.name;

//         // to have 14 unorder list we  need to do a foor loop
//         let ul = document.createElement('ul');
//         div.appendChild(ul);
//         for (let i = 0; i < workHour.length; i++) {
//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.textContent = `${workHour[i]} ${this.coPerHour[i]} Cookies`;
//         }

//         let li1 = document.createElement('li');
//         ul.appendChild(li1);
//         li1.textContent = `Total : ${this.total} cookies`;
