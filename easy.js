// Write a function that takes in an array of numbers and outputs the average of all the numbers.
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2









var arr = [1.5, 3, 2.5, 1];

// var sum = 0

// for (var number of arr) {
//     sum += number;
// }

// average = sum / arr.length;

// console.log(average);

//or


const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);