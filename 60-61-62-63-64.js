60;

let catName = "Oliver";
let catSound = "Meow!";

61;
// Only change code below this line
const FCC = "freeCodeCamp";
let fact = "is cool!";
// Only change code above this line

fact = "is awesome!";
console.log(FCC, fact);

62;

// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

63;

// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

64;

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
