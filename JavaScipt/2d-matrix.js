Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true


// 1. My Orginal Solution 

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    return matrix.filter((ele) => {
        return ele.includes(target)
    })
};

2. Obtimized Solution 



//////////////////////////////////////////////////////////////////////////////
// Single Binary Search
// Time: O(log(mn))  Space: O(1)
//////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[][]} matrix
 * @param {number} target
 * Time O(log(ROWS * COLS)) | Space O(1)
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const [rows, cols] = [matrix.length, matrix[0].length];
    let [left, right] = [0, rows * cols - 1];

    while (left <= right) {
        const mid = (left + right) >> 1;
        const [row, col] = [Math.floor(mid / cols), mid % cols];
        const guess = matrix[row][col];

        const isTarget = guess === target;
        if (isTarget) return true;

        const isTargetGreater = guess < target;
        if (isTargetGreater) left = mid + 1;

        const isTargetLess = target < guess;
        if (isTargetLess) right = mid - 1;
    }

    return false;
};
