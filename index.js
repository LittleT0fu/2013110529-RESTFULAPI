// const datefns = require('date-fns')
// console.log(datefns.format(new Date(),"MM/dd/yyyy"))
// //console.log("Hello World!");


// let firstname = 'Kraiwit'
// let age = 16
// console.log(firstname + age)
// let info = `
//     My name is ${firstname}
//     My age is ${age}
// `
// console.log(info)


const user = { 
    name : 'empName',
    salary : 20000000,
    address : {
        province : 'Bangkok',
        postcode : 10220,
        test : {
            province : 'gg',
            postcode : 232323
        }
    }
}
// console.log(user.address.test.postcode);

const showData = ()=> `${user.name}`
const showData2 = ()=> {
    let info = 'My name is '
    return ` ${info} ${user.name} `
}
// console.log(showData2())


// const sumNumber = (a,b)=> a+b;
// console.log(sumNumber(9,1))

const {name , salary ,address:{postcode}} = user

// console.log(name);


const drinks = ["cofee", "Coke" , "Greentea"]

for (const b of drinks){
    console.log(b)
}
