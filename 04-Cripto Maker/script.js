
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

//STEP-1


function makeid() {
  let length=prompt("how long do you want your id")
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$%^&';
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * characters.length));
     if(!isNaN(result[i]) && i<length-1){
     
      result+="-"
    }
  }
  return result;
}

console.log(makeid());

//STEP 2
//const special = "* $ & %"







//STEP 3




//STEP 4
givenUnwanted = "3 , * , j , q , z"


