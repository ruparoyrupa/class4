


let bmi =(type, weight , hight) =>{
    if(type == "bmi" ,weight / (hight*hight) >18.5  && weight / (hight*hight) < 24.9 ){
        return ` You have right weight. Do not suffer from obsity or weightlessness.` ;
    }
}




console.log(bmi("bmi" ,60 ,1.7));



