// Switch statements
var movie = prompt("Which movie do you want to know about?");

var getReview = function(movie){

    switch(movie) {
        case "Toy Story 2":
            return ("Great story. Mean prospector.");
        case "Finding Nemo":
            return ("Cool animation, and funny turtles.");
        case "The Lion King": 
            return ("Great songs.");
        default:
            return ("I don't know!");
    }

};
// object.create
var spencer2 = Object.create({age: 22,
  country: "United States"}); 



// Method is like a function associated with an object, they can be used to alter an object property value.
var adam = new Object();
adam.age = 17;
// this time we have added a method, setAge
adam.setAge = function (newAge){
  adam.age = newAge;
};

adam.getYearOfBirth = function () {
  return 2015 - adam.age;
};
console.log(adam.getYearOfBirth());

// making similar objects
function Rabbit(adjective) {
this.adjective = adjective;
this.describeMyself = function() {
console.log("I am a " + this.adjective + " rabbit");
};
}

var rabbit1 = new Rabbit("fluffy");
rabbit1.describeMyself();

var rabbit2 = new Rabbit("happy")
rabbit2.describeMyself();

var rabbit3 = new Rabbit("sleepy")
rabbit3.describeMyself();
