
// let numberOfBottles = 99

// let numberOfBottles = 99

// function feltbottle(num){
//   while(num>=0){
//     if(num>0){
//        console.log(num +" bottles of milk on the Wall. Take one down, pass it around.")
//     num--;
//     }else if(num==1){
//       console.log(num + " bootle left")
//        num--;
//     }else if(num==0){
//       console.log("no any bottle")
//       num--;
   
//   }
// }
// }
//   feltbottle(30)


  //////////////////////////////////////
  function feltbottle(){
    let num=prompt("Enter your bottle number")*1
    let felt=prompt("how many fall down")*1
    while(num>=0){
      
      if(num>0){
         console.log(num +" bottles of milk on the Wall. Take one down, pass it around.")
      //num-=felt;
      }else if(num==1){
        console.log(num + " bootle left")
       // num-=felt;
      }else if(num==0){
        console.log("no any bottle")
       // num-=felt;
     
    } num-=felt;
  }
     
  }
  
   feltbottle();
  