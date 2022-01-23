Properties and methods of string

let name = "  hiren b patel";
console.log(name);
console.log(name.length);
console.log(name.trim());
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(2));
console.log(name.charAt(11));
console.log(name.trim().startsWith('hiren'));
console.log(name.trim().slice(0,5).charAt(0).toUpperCase());
// console.log(name.trim().charAt(name.length - 3));

ES6- and Template literals, Backtic, interpolation

let name = 'hiren';
let age = 49;
let statement = `My name is ${name} and I'm ${age} year old, my eligible is ${49 + 5}`;
console.log(statement);

properties and methods of arrays

let names = ['hp', 'kp', 'ap,', 'up', 'bp', 'jp'];
const surname = ['patel', 'shah']
console.log(names.length);
console.log(names[2]);
console.log(names[names.length - 1]);

console.log(names.reverse());
let rnames = names.reverse();
console.log(rnames);

console.log(names.concat(surname));
let fullname = names.concat(surname);
console.log(fullname);

fullname.unshift('karmit');
console.log(fullname)

fullname.shift();
fullname.shift();
fullname.shift();
console.log(fullname);

fullname.push('hiren');
console.log(fullname);
fullname.push('kaushal')
console.log(fullname)
fullname.pop();
console.log(fullname);

fullname.splice(1, 1);
console.log(fullname)

Exercise=== to generate fullname ===========
const name = ['hiren', 'avni', 'karmit'];
console.log(name );
const surname = ['patel']
console.log(surname);
let fullname = [];
for (let i = 0; i < name.length; i++){
    fullname.push(`${name[i]} ${surname[0]} `)
    // console.log(fullname)

}

console.log(fullname);

===========to do total of arrary===========
let gas = [50, 30, 30];
let food = [20, 30,25, 35, 45];
let total
function subtotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++)
    {total=total + arr[i]

    }
    return(total)
}

const gastotal = subtotal(gas);
console.log(`Total gas= ${gastotal}`);

const foodtotal = subtotal(food);
console.log(`Total food= ${foodtotal}`);
const alltotal = gastotal + foodtotal;
console.log(`Total of all expence ${alltotal}`)
if (alltotal >= 300) {
    console.log('you are spending too much')
}
else {
    console.log('you are ok for more spending')
}

 ============== Higher-order function, Call back=======

console.log('hello everyone');
function morning() {
    let m = 'good morning';
    return(m)
}
function hello(name, cb) {
    console.log(`my name is hiren ${cb} ${name.toUpperCase()}`)
}
hello('rajesh',morning())
hello('tejash',morning())

=============Some Powerfull array methods==========

----------forEach------------

let member = [
    {name:'hiren',age:49, position:'technician'},
    {name:'avni',age:47, position:'shipper'},
    {name:'karmit',age:24, position:'programmer'}
]
console.log(member[2].position)
console.log(member[1].name)
console.log(member[0].age)

// method 1
function item(x){
    console.log(x.name.toUpperCase())

}
member.forEach(item);

// method 2
member.forEach(function (x)
{
  console.log(x.name.toLowerCase());
})

simple example

let num1 = 10;
let num2 = 20;
let num3 = 30;

let total = add(num1, num2, num3);
console.log(`total of 3 numbers = ${total}`)

function add(a, b, c) {
  let total1 = a + b + c;
  return (total1)
}
expression method

let num1 = 10;
let num2 = 20;
let num3 = 30;

let total = function (x,y,z) {
  let sum = x + y + z;
  // console.log(`sum of 3 numbers =  ${sum}`)
  return  (sum)
  
}
console.log(`total of 3 number = ${total(num1,num2,num3)}`)


=============== map =================

let family = [
  {name:'hiren', age: 49, position: 'techy'},
  {name:'avni', age: 47, position: 'shipper'},
  {name:'karmit', age: 24, position: 'programmer'}
]
console.log(family)

example 1

let fullnames = family.map(function (x) {
  let newname = x.name.toLocaleUpperCase() + " PATEL"
  let newage = x.age + 20
  return{newname,newage,position:x.position}
})
console.log(fullnames)

example 2

let fullnames = family.map(function (x) {
  let newname = x.name.toLocaleUpperCase() + " PATEL";
  
  return { newname, position: x.position };
});
console.log(fullnames);

example 3
let fullnames = family.map(function (x) {
  
  
  return {avatar:x.name };
});
console.log(fullnames);

example 4
let newage = family.map(function (x) {
  return { newage: x.age + 10 }
})
console.log(newage)


===========filter============
let family = [
  { name: "hiren", age: 49, position: "techy" },
  { name: "avni", age: 47, position: "shipper" },
  { name: "karmit", age: 24, position: "programmer" },
];
console.log(family);
let young = family.filter(function (x) {
  return x.age <=30
})
console.log(young)

let old = family.filter(function (x) {
  return x.age > 40;
})
console.log(old)

let developer = family.filter(function (x) {
  return x.position === 'senior developer';
() })
console.log(developer)

=============find==============

let names = ['hiren', 'avni', 'karmit', 'best', 'better']
console.log(names);
let lucky = names.find(function (x) {
  return x === 'best'
})
console.log(lucky);

let lucky1 = names.find(function (x) {
  return x === 'karmit'
})
console.log(lucky1)

==============reduce==============

 let family = [
  {name:'hiren', age: 49, position: 'techy'},
  {name:'avni', age: 47, position: 'shipper'},
  {name:'karmit', age: 24, position: 'programmer'}
]
console.log(family)

