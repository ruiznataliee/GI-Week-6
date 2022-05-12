// : Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on Arrays to aid in working through this problem. 
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1.











var nums = [4, 5, 6, 7, 0, 1, 2]

// var target1 = 6

// var target2 = 2

// var output1 = nums.indexOf(target1);

// var output2 = nums.indexOf(target2);


// console.log(`${"target1"} is the index of ${output1}`);

// console.log(`${"target2"} is the index of ${output2}`);


//or

function search(numbers, target) {
    let index = -1
    for (let x = 0; x < numbers.length; x++) {
        if (target === numbers[x]) {
            index = x
        }
    }
    return index
}
console.log(search(nums, 1))