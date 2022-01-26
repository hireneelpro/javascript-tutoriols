// const banner = document.getElementById('banner');
// banner.style.backgroundColor = 'yellow';
// banner.style.color = 'blue';
// const btn = document.getElementById('btn');
// btn.style.backgroundColor = 'grey';
// btn.style.color = 'white'

// // get element by tag name
// const heading = document.getElementsByTagName('h1');
// // console.log(heading);
// heading[0].style.color = 'red';
// heading[1].style.color = 'blue';
// heading[3].style.color = 'green';
// // converting node array into fully functional normal array
// const arrheading = [...heading];
// console.log(arrheading)

// arrheading.forEach(function (x) {
//     console.log (arrheading[])
// })

// // querySelector on single element
// const family = document.querySelector('#family')
// family.style.background = 'red'
// family.style.color = 'white'
// console.log(family)
// // effect of querySelector on multiple element
// const name = document.querySelector('.name')
// name.style.color = "yellow";
// console.log(name);
// // querySelectorAll
// const names = document.querySelectorAll('.name')
// console.log(names);
// names[3].style.color = 'blue';
// names[3].style.background = 'yellow'
// names.forEach(function (x) {
//     console.log ('hello')
// })

// const family = document.querySelector('#family')
// console.log(family);
// const allchildren = family.childNodes;
// console.log(family.childNodes);
// console.log(family.children);
// console.log(family.firstChild);
// console.log(family.lastChild);

// let para = document.querySelector('p')
// console.log(para);
// let parent = para.parentElement;
// console.log(parent);
// parent.style.background = "yellow"

// let parent = para.parentElement.parentElement
// console.log(parent);

// const first = document.querySelector('.name')
// console.log(first)
// // // const second = first.nextSibling;
// // // console.log(second);

// // const second = first.nextSibling.nextSibling;
// // console.log(second);

// const last = document.querySelector('.last')
// console.log(last);
// // console.log(last.previousSibling.previousSibling)

// console.log(first.nextElementSibling)
// console.log(last.previousElementSibling)

// const family = document

// const x = document.getElementById('family')
// const classvalue = x.className;
// console.log(classvalue);
// //it will not show anything as family is id , no class assigned.
// x.className = 'myfamily '
// x.className = 'new '
// x.className = 'myfamily new'
// x.classList.add('new1','new2');
// console.log(x);

// x.classList.remove('new1','new2')

// creating element and text

// const main = document.getElementById("main");
// // create div

// const xdiv = document.createElement("div");
// xdiv.style.color = "red";
// xdiv.style.backgroundColor = "yellow";
// // create text
// const xtext = document.createTextNode("this is js text");
// // append text to div
// xdiv.appendChild(xtext);
// // append div to body
// // document.body.append(xdiv);
// main.appendChild(xdiv)

// // create new div
// const x1div=document.createElement('h3')
// x1div.innerText = 'how r you'
// x1div.className = 'hp'
// // main.replaceChild(x1div, xdiv);
// // main.remove()
// // main.removeChild(x1div)

// const list = document.getElementById('first')
// const div = document.getElementById('second')
// console.log(list.textContent);
// console.log(list.innerHTML)
// console.log(div.innerHTML)
// console.log(div.textContent)
// const newlist = document.createElement('ul')
// document.body.appendChild(newlist)
// newlist.innerHTML = `<li>one</li>
//         <li>two</li>
//         <li>three</li>`;

// css in java using class or id


// Good Tutorial


const heading = document.querySelector("h1");
heading.classList.add("new");
//

//
const button = document.querySelector(".btn");
function change() {
    hasclass=heading.classList.contains('red')
    if (hasclass) {
      heading.classList.remove("red");
    } else {
      heading.classList.add("red");
    }}
    
button.addEventListener("click",change )
//   heading.style.fontSize = "3rem";
//   heading.style.backgroundColor = "yellow";
//   heading.style.margin = 0;
//   heading.style.padding = "2rem";
//   button.style.backgroundColor = "red";
//   button.style.color = "white";

