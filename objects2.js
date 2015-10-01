//Array of Objects
var Person = function(name,age){
    this.name = name;
    this.age = age;
};


// Now we can make an array of people
var family = new Array();
family[0] = new Person ("jude",140);
family[1] = new Person("james",84);
family[2] = new Person("collins",18);
family[3] = new Person("timothy",16);

// loop through our new array
for(var i = 0; i<4; i++){
    console.log(family[i].name);
}

