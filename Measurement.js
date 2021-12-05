

let measurement = ( type,hight,width) => {
    if (type == "s"){
        return hight * hight;
    }else if(type == "r"){
        return hight * width ;
    }else if (type == "t"){
        return .5 * width * hight ;
    }
}



console.log(measurement("t" , 12 , 24));