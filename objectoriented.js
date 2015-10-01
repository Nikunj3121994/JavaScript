// JavaScript object creation

var me = {name:"Mel",age:22};

// Types of object: object literal notation and object constructor


//      object literal notation

var me = {
    type: 'mood',
    disposition: 'happy'
};
var emptyme = {};

// another example
var me = {
    name: 'Benson',
    age:22
};

// object constructor


var myObj = new Object();
myObj["name"] = "Mel";

//another example

myObj.name = "Melvis";

// another example
var spencer2 = new Object();

spencer2.age = 22;
spencer2.country = "United States";

// adding an object inside of an array

var myArray = [2,true,"mel",{object:"abi"}];

// you can add an array inside the object key
var myObject = {
  name: 'charles',
  sex: 'male',
  // Add your code here!
  interests:  ["Football","Sleeping"]
};

//multi-dimensional arrays

var friends = {
    bill: {
        
        firstName: "jake",
        lastName: "Gates",
        number: "258792",
        address: ['Goodnight drive']
        }
    steve: {
        
        firstName: "steve",
        lastName: "jones",
        number: "2587922",
        address: ['Akabus way']
        }
};
