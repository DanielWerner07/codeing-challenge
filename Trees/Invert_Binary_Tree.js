// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

function invertTree (root) {
    let Incress = 2
    let newRoot = [];
    let y = Incress;
    let t = 1;
    newRoot[0] = root[0];
    let u = 0;
    for (let i = 1; i < root.length;) {
        u = y;
        for (let e = 1; e < (Incress + 1); e++) {
            newRoot[t] = root[u];
            u--;
            t++;
        }
        i += Incress;
        Incress *= 2;
        y += Incress;
    }
    return newRoot;
};

root1 = [4,2,7,1,3,6,9];
root2 = [2,1,3];
root3 = [];
console.log(invertTree(root1)); // should be [4,7,2,9,6,3,1]
console.log(invertTree(root2)); // should be [2,3,1]
console.log(invertTree(root3)); // should be []