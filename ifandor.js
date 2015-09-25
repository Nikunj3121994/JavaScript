//if statement and else if statement

var isEven = function(number) {
  // Your code goes here!
  if (number % 2 === 0)
  {
      return true;
  } 
  else if (isNaN(number)) {
      return "Please enter a number";
  }
  else  {
      return false;
  }
  
};
isEven();//Please enter a number string will execute.

//sandwich switch statement
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
// or operator

var tired = true;
var bored = false;
var nap = function() {
  // Add your if/else statement here!
  if (tired || bored) {
      return true;      
  } else {
      return false;
  }
  
};
nap();