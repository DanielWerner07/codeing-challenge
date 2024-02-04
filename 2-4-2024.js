// Given pre-order and in-order traversals of a binary tree, write a function to reconstruct the tree
// For example, given the following preorder traversal:
// [a, b, d, e, c, f, g]
// And the following inorder traversal:
// [d, b, e, a, f, c, g]
// You should return the following tree:
//     a
//    / \
//   b   c
//  / \ / \
// d  e f  g

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function buildTree(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
      return null;
    }
  
    const rootValue = preorder[0];
    const root = new TreeNode(rootValue);
  
    const rootIndexInOrder = inorder.indexOf(rootValue);
  
    const leftInOrder = inorder.slice(0, rootIndexInOrder);
    const rightInOrder = inorder.slice(rootIndexInOrder + 1);
  
    const leftPreOrder = preorder.slice(1, 1 + leftInOrder.length);
    const rightPreOrder = preorder.slice(1 + leftInOrder.length);
  
    root.left = buildTree(leftPreOrder, leftInOrder);
    root.right = buildTree(rightPreOrder, rightInOrder);
  
    return root;
  }
  
  const preorder = [3, 9, 20, 15, 7];
  const inorder = [9, 3, 15, 20, 7];
  
  const reconstructedTree = buildTree(preorder, inorder);
  console.log(reconstructedTree);