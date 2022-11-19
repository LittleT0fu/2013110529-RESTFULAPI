const user = [
    {
        name : 'Kraiwit',
        nickname : 'Got',
        hobby : 'sleep',
        address : '38/1',
        province : {
            province : 'Ratcaburi',
            postcode : 70110}
    },
    {
        name : 'Chinchira',
        nickname : 'TaoHuu',
        hobby : 'eat',
        address : '32/18',
        province : {
            province : 'Ratcaburi',
            postcode : 70110}
    },
    {
        name : 'Rawit',
        nickname : 'Tuinui',
        hobby : 'play game',
        address : '24/11',
        province : {
            province : 'Bangkok',
            postcode : 10220}
    },

]
const DestrucObj = ({name , nickname , hobby , address , province:{province , postcode}})=>{
    return `"My nickname is ${nickname}, My hobby is ${hobby} and my postcode is ${postcode} `

}
for (const u of user){
    console.log(DestrucObj(u));
} 
