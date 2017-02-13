// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;
for (var i = 0; i < 5; i++) {
  checkz ++;
}


// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
i = 0
while (i < 3) {
  checkz -= 2;
  i ++;
}

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);
// The variable number is an array of numbers and total is set to 0
// We begin a for loop by setting i(iterations) to 0 then enter the conditional block
// that will run as long as i is less than the amount of numbers in the array.
// the last part increments the variable i upon each pass.
// When the conditional section is true, total is increased by the value of the
// sprecified index. (example; i = 2; 2 < 7; 2 += 1 \ total = 3 after looping through [0] &[1]\
// total = 3 + 3 which changes total to 6)
