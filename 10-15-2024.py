# reduce (also known as fold) is a function that takes in an array, a combining function, 
# and an initial value and builds up a result by calling the combining function on each element of the array, 
# left to right. For example, we can write sum() in terms of reduce:

# def add(a, b):
#     return a + b

# def sum(lst):
#     return reduce(lst, add, 0)

# This should call add on the initial value with the first element of the array, and then the result of that with the second element of the array, 
# and so on until we reach the end, when we return the sum of the array.

# Implement your own version of reduce.

def reduce(lst, func, initial):
    result = initial
    for item in lst:
        result = func(result, item)
    return result

# Example usage:
def add(a, b):
    return a + b

# Implementing sum using reduce
def sum(lst):
    return reduce(lst, add, 0)

# Testing
numbers = [1, 2, 3, 4, 5]
print(sum(numbers))  # Output: 15

# Another example: Product of all elements
def multiply(a, b):
    return a * b

product = reduce(numbers, multiply, 1)
print(product)  # Output: 120

# Explanation:

#     The reduce function takes three arguments:
#         lst: The list to process.
#         func: The combining function that operates on two arguments.
#         initial: The starting value for the reduction.
#     Start with result initialized to initial.
#     Iterate over the list lst:
#         Call the combining function func with the current result and the current list element.
#         Update result with the return value of func.
#     Return the final result after processing all elements in the list.
# This implementation follows the functional paradigm, where the combining function can be any operation (e.g., addition, multiplication, concatenation).