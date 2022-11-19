const user = {
    name : 'Kraiwit Chinchanathavorn',
    nickname : 'Got',
    hobby : 'sleep',
    address : '38/1',
    province : {
        province : 'Ratcaburi',
        postcode : 70110
    }
}

// let {name , nickname , hobby , address , province:{province , postcode}} = user
// console.log(postcode);

const DestrucObj = ({name , nickname , hobby , address , province:{province , postcode}})=>{
    return `"My nickname is ${nickname}, My hobby is ${hobby} and my postcode is ${postcode} `

}
console.log(DestrucObj(user));