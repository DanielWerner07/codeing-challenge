class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function evaluateExpressionTree(root) {
    if (!root) {
      return 0;
    }
  
    if (!root.left && !root.right) {
      return parseInt(root.val);
    }
  
    const leftVal = evaluateExpressionTree(root.left);
    const rightVal = evaluateExpressionTree(root.right);
  
    switch (root.val) {
      case '+':
        return leftVal + rightVal;
      case '-':
        return leftVal - rightVal;
      case '*':
        return leftVal * rightVal;
      case '/':
        return Math.floor(leftVal / rightVal);
      default:
        throw new Error("Invalid operator");
    }
  }
  // Example usage:
  const root = new TreeNode('*');
  root.left = new TreeNode('+');
  root.left.left = new TreeNode('3');
  root.left.right = new TreeNode('2');
  root.right = new TreeNode('+');
  root.right.left = new TreeNode('4');
  root.right.right = new TreeNode('5');
  
  console.log(evaluateExpressionTree(root)); // Output: 45