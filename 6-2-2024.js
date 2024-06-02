// Implement a 2D iterator class. It will be initialized with an array of arrays, and should implement the following methods:

//     next(): returns the next element in the array of arrays. If there are no more elements, raise an exception.
//     has_next(): returns whether or not the iterator still has elements left.

// For example, given the input [[1, 2], [3], [], [4, 5, 6]], calling next() repeatedly should output 1, 2, 3, 4, 5, 6.

// Do not use flatten or otherwise clone the arrays. Some of the arrays can be empty.

class TwoDIterator {
    constructor(arrayOfArrays) {
        this.arrayOfArrays = arrayOfArrays;
        this.outerIndex = 0;
        this.innerIndex = 0;
        this.advanceToNext();
    }

    advanceToNext() {
        while (this.outerIndex < this.arrayOfArrays.length && this.innerIndex >= this.arrayOfArrays[this.outerIndex].length) {
            this.outerIndex++;
            this.innerIndex = 0;
        }
    }
    next() {
        const result = this.arrayOfArrays[this.outerIndex][this.innerIndex];
        this.innerIndex++;
        this.advanceToNext();
        return result;
    }
    has_next() {
        this.advanceToNext();
        return this.outerIndex < this.arrayOfArrays.length;
    }
}

const arrays = [[1, 2], [3], [], [4, 5, 6]];
const iterator = new TwoDIterator(arrays);

while (iterator.has_next()) {
    console.log(iterator.next());
}