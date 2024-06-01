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

// Explanation:

//     Initial Setup:
//         Create an array counts initialized with zeros to store the result.
//         Create an array indices to keep track of the original indices of the elements.

//     Merge Sort:
//         Define a mergeSort function that sorts the array while counting the smaller elements to the right.
//         Recursively split the array into two halves until each half contains one element.

//     Merge Process:
//         During the merge process, compare elements from the left and right halves.
//         If an element in the left half is greater than an element in the right half, it means that this element has all the remaining elements in the right half as smaller elements to its right.
//         Update the counts array accordingly.
//         Merge the two halves while maintaining the original indices.

//     Return Result:
//         After the merge sort completes, the counts array contains the desired counts of smaller elements to the right for each element in the input array.

// This approach effectively leverages the divide-and-conquer strategy of Merge Sort to achieve an O(n log n) time complexity, making it efficient for larger input arrays.