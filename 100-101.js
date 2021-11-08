100;
// Setup
const myArr = [2, 3, 4, 5, 6];
var total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
// Only change code below this line
/* total + myArr[0] -> 0 + 2 = 2
total + myArr[1] -> 2 + 3 = 5
total + myArr[2] -> 5 + 4 = 9
total + myArr[3] -> 9 + 5 = 14
total + myArr[4] -> 14 + 6 = 20 */

101;

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]); // = 5040
