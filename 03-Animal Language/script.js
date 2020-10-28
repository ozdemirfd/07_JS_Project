//Convert any text to whale language! 

let input = 'Hi, Human!';

function doubleVowels(str){
  const regex = /[^aeiou]/gi;
    let str1="";
    str= str.replace(regex,""  ).toUpperCase()
     for(var a=0;a<str.length;a++){
  //      console.log(str)
       if(str[a]==="U" || str[a]==="E"){
         str1=str1+str[a]+str[a]
       }else{
         str1+=str[a]
       }
     }
    return str1
  }
  console.log(doubleVowels("a whale of a deal!"))//AAEEOAEEA
  console.log(doubleVowels("Hi, Human!"))//IUUA