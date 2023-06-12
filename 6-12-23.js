// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, 
// find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

function lowestPostiveIntiger(array) {
    array = array.filter(function(x) { return x > 0});
    array.sort(function(a, b){return a -b});
    counter = 1;
    for (let i = 0; i < 100; i ++) {
        if (i + 1 == array[i]) {
            counter++;
        } else {
            return counter;
        }
    }
}

array1 = [3, 4, -1, 1, 0];
console.log(lowestPostiveIntiger(array1));
// should be 2

array2 = [1, 2, 0];
console.log(lowestPostiveIntiger(array2));
//should be 3