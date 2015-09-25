//For Loop
for (var i = start; i < end; i++) {
  // do something
}
//While Loop
var bool = true;

while(bool){
    console.log("Less is more!");
    bool = false;
}
//while loop2

var count = 0; 
while (count < 10)

{   
    console.log(count); 
     count++;
} 
//dowhile loop
var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);
// for dowhile loop
// Write your code below!
for(var i = 1; i < 15; i++)  {
    console.log(i);
}
function printArray(a) {  
    var len = a.length, i = 0;
    if (len == 0)
    console.log("Empty Array"); 
    else { 
        do {            
            console.log(a[i]);
            } while (++i < len);
            } } 
