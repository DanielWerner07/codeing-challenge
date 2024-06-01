// Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element in the original input array.

// For example, given the array [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0], since:

//     There is 1 smaller element to the right of 3
//     There is 1 smaller element to the right of 4
//     There are 2 smaller elements to the right of 9
//     There is 1 smaller element to the right of 6
//     There are no smaller elements to the right of 1


function countSmaller(nums) {
    const counts = new Array(nums.length).fill(0);
    const indices = nums.map((_, i) => i);

    function mergeSort(start, end) {
        if (end - start <= 1) return;

        const mid = Math.floor((start + end) / 2);
        mergeSort(start, mid);
        mergeSort(mid, end);

        const temp = [];
        let i = start, j = mid;
        while (i < mid && j < end) {
            if (nums[indices[i]] <= nums[indices[j]]) {
                temp.push(indices[j]);
                j++;
            } else {
                counts[indices[i]] += end - j;
                temp.push(indices[i]);
                i++;
            }
        }

        while (i < mid) {
            temp.push(indices[i]);
            i++;
        }
        while (j < end) {
            temp.push(indices[j]);
            j++;
        }

        for (let k = start; k < end; k++) {
            indices[k] = temp[k - start];
        }
    }

    mergeSort(0, nums.length);
    return counts;
}

const input = [3, 4, 9, 6, 1];
const result = countSmaller(input);
console.log(result);  // Output: [1, 1, 2, 1, 0]