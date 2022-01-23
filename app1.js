
// Properties and methods of string

// let name = "  hiren b patel";
// console.log(name);
// console.log(name.length);
// console.log(name.trim());
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(2));
// console.log(name.charAt(11));
// console.log(name.trim().startsWith('hiren'));
// console.log(name.trim().slice(0,5).charAt(0).toUpperCase());
// // console.log(name.trim().charAt(name.length - 3));

// ES6- and Template literals, Backtic, interpolation

// let name = 'hiren';
// let age = 49;
// let statement = `My name is ${name} and I'm ${age} year old, my eligible is ${49 + 5}`;
// console.log(statement);


// properties and methods of arrays

// let names = ['hp', 'kp', 'ap,', 'up', 'bp', 'jp'];
// const surname = ['patel', 'shah']
// console.log(names.length);
// console.log(names[2]);
// console.log(names[names.length - 1]);

// console.log(names.reverse());
// let rnames = names.reverse();
// console.log(rnames);

// console.log(names.concat(surname));
// let fullname = names.concat(surname);
// console.log(fullname);

// fullname.unshift('karmit');
// console.log(fullname)

// fullname.shift();
// fullname.shift();
// fullname.shift();
// console.log(fullname);

// fullname.push('hiren');
// console.log(fullname);
// fullname.push('kaushal')
// console.log(fullname)
// fullname.pop();
// console.log(fullname);

// fullname.splice(1, 1);
// console.log(fullname)

// Exercise=== to generate fullname ===========
// const name = ['hiren', 'avni', 'karmit'];
// console.log(name );
// const surname = ['patel']
// console.log(surname);
// let fullname = [];
// for (let i = 0; i < name.length; i++){
//     fullname.push(`${name[i]} ${surname[0]} `)
//     // console.log(fullname)

// }

// console.log(fullname);



// ===========to do total of arrary===========
// let gas = [50, 30, 30];
// let food = [20, 30,25, 35, 45];
// let total
// function subtotal(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++)
//     {total=total + arr[i]
        
//     }
//     return(total)
// }

// const gastotal = subtotal(gas);
// console.log(`Total gas= ${gastotal}`);

// const foodtotal = subtotal(food);
// console.log(`Total food= ${foodtotal}`);
// const alltotal = gastotal + foodtotal;
// console.log(`Total of all expence ${alltotal}`)
// if (alltotal >= 300) {
//     console.log('you are spending too much')
// }
// else {
//     console.log('you are ok for more spending')
// }

console.log('hello everyone');
function morning() {
    let m = 'good morning';
    return(m)
}
function hello(name, cb) {
    console.log(`my name is hiren ${cb} ${name.toUpperCase()}`)
}
hello('rajesh',morning())







