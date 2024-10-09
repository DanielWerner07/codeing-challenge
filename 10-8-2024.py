# Given a binary search tree and a range [a, b] (inclusive), return the sum of the elements of the binary search tree within the range.
# For example, given the following tree:

#     5
#    / \
#   3   8
#  / \ / \
# 2  4 6  10

# and the range [4, 9], return 23 (5 + 4 + 6 + 8).

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def range_sum_bst(root, a, b):
    if not root:
        return 0
    
    total_sum = 0
    
    # Check if the current node's value is within the range
    if a <= root.val <= b:
        total_sum += root.val
    
    # If the current node's value is greater than 'a', recurse on the left subtree
    if root.val > a:
        total_sum += range_sum_bst(root.left, a, b)
    
    # If the current node's value is less than 'b', recurse on the right subtree
    if root.val < b:
        total_sum += range_sum_bst(root.right, a, b)
    
    return total_sum

# Example usage:
# Construct the tree:
root = TreeNode(5)
root.left = TreeNode(3)
root.right = TreeNode(8)
root.left.left = TreeNode(2)
root.left.right = TreeNode(4)
root.right.left = TreeNode(6)
root.right.right = TreeNode(10)

# Range [4, 9]
result = range_sum_bst(root, 4, 9)
print(result)  # Output: 23

# Explanation:

#     If the current node is None, return 0.
#     Add the current node's value to the sum if it lies within the range [a, b].
#     Traverse the left subtree if the current node's value is greater than a (there might be nodes within the range in the left subtree).
#     Traverse the right subtree if the current node's value is less than b.
#     Sum up the results from the current node, left subtree, and right subtree.