//if (condition){action}else{Action}
let age = 19;

if(age >= 18)
{
    console.log("Eligible");
}
else 
{
    console.log("Not Eligible");
}
//


//Ternary operators

//
console.log((age >= 18)? "Eligible" : "Not Eligible" );
////
// if(condition){action}
let marks = 50;

if(marks >= 40)
{
    console.log("Passed");
}
//
console.log(( marks >= 40 ) ? "Passed" : "Failed" );
//
let a = 5,
  b = 10,
  c = 7,
  largest;
if (a >= b) {
    //nested if-else blocks
  if (a >= c) {
    largest = a;
  } else {
    largest = c;
  }
} else {
  if (b >= c) {
    largest = b;
  } else {
    largest = c;
  }
}
console.log(largest)


let largest1 = a >= b ? (a >= c ? a : c) : b >= c ? b : c;
//using nested Ternary operator 
console.log(largest1)
//switch

const num1 = 0;
switch (num1) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of num1 matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1
//
//switch
expr="Mangoes"
switch (expr) {
    case "Oranges":
      console.log("Oranges are $0.59 a pound.");
      break;
    case "Apples":
      console.log("Apples are $0.32 a pound.");
      break;
    case "Bananas":
      console.log("Bananas are $0.48 a pound.");
      break;
    case "Cherries":
      console.log("Cherries are $3.00 a pound.");
      break;
    case "Mangoes":
        console.log("Mangoes are $2.79 a pound.");
      break;
    case "Papayas":
      console.log(" papayas are $2.79 a pound.");
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
  
  console.log("Is there anything else you'd like?");
  
