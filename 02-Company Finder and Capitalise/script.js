// STEP-1
// Filter out companies which have more than one 'o' without the filter method
const firms = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon, Oppo";

const firms = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon, Oppo";

function arr(array){
    let myArray=array.split(", ")
    let newArr=[];
   
   for(var a=0; a<myArray.length;a++){
     let count=0;
     for(var i=0;i<myArray[a].length;i++){
      if(myArray[a][i].toLowerCase()==="o"){
        count++;
     
      }
    }
        
     if(count==2){
     newArr.push(myArray[a]);
     }
    
   }
  return newArr;
 
}

console.log(arr(firms))









//STEP-2

 loremIpsum = "Contrary to popular belief, Lorem Ipsum is not simply random text. it has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.a.32 and 1.a.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. this book is a treatise on the theory of ethics, very popular during the Renaissance. the first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.a.32"

 function array(arr){
  let myarray=arr.split(". ")
  console.log(myarray.length)
  let newArray=[]
  for(var a=0;a<myarray.length;a++){
     newArray.push (myarray[a][0].toUpperCase()+myarray[a].slice(1));
  }
  return newArray.join(".")
  
}


console.log(array(loremIpsum))