47;
function reusableFunction() {
  console.log("Hi World");
}
console.log(reusableFunction());

48;
function functionWithArgs(a, b) {
  console.log(a + b);
}
console.log(functionWithArgs(1, 2));

49;
// Declare the myGlobal variable below this line

var myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
