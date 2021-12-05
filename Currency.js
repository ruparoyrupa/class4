




// let cur =(currency ,ammount) => {

//     if (currency == "dollar"){
//      return `${ammount *86} taka .`   
//     }else if (currency == "pound"){
//         return `${ammount * 115.32} taka .`
//     }else if (currency == "euro"){
//         return `${ammount * 98.32} taka .`
//     }
// }


// console.log(cur("dollar",120));


let bdt =(currency , ammount) =>{
    if(currency == "dollar"){
        return `${ammount / 86 } dollar . `;
    }else if (currency == "pound"){
        return `${ammount / 115.32 } pound .`;
    }else if (currency == "euro"){
        return `${ammount / 98.32}  euro . `;
    }
}

console.log(bdt("euro",100000 ));