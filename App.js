
// Create a function that will return children, teenagers, young people, old people from the age



let agecal=(name ,year ) => {
   
  let age =(2021-year);
  
  if(2021-year <= 5){
      return `Hi, ${name}. You are ${2021-year} years old .You are a baby .`;
  }else if(2021-year >= 13 && 2021-year <= 19){
      return `Hi, ${name}. You are ${2021-year} years old . You are a teenager .`;
  }else if (2021-year > 19  && 2021-year <= 45){
      return `Hi, ${name}. You are ${2021-year} years old . You are a young man .`;
  }else if (2021-year > 45 ){
    return `Hi, ${name}. You are ${2021-year} years old . You are a old man .`;
  }else if(2021-year >= 6 && 2021-year <= 12){
    return `Hi, ${name}. You are ${2021-year} years old . You are a children .`;
  }
   
   
}
console.log(Agecal("Rana", 2015));

