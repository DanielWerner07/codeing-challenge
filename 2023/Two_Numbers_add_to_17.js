// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function addTo17(array) {
    for (let i = 0; i < array.length; i++) {
        for (let e = (0 + i); e < array.length; e++) {
            if (array[i] + array[e] == 17) {
                return true;
            }
        }
    }
    return false;
}

let array1 = [10, 15, 3, 7];
console.log(addTo17(array1));
// should be true
let array2 = [11, 15, 3, 7];
console.log(addTo17(array2));
// should be falses