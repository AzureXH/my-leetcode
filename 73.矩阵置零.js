/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * - 降低空间复杂度的思路是利用额外的变量以及第一行或第一列作为空间
 * - 这个额外空间存储的是该行或该列是否有0
 * - 所以相当于做了一个预处理
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    //作为第0列是否有0的依据
    //选列不选行是因为遍历矩阵按行遍历，方便得到第0列
    let flagCol0 = false
    const m = matrix.length;
    const n = matrix[0].length
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true
        }
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for (let i = m - 1; i >= 0; i--) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (flagCol0) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};
// @lc code=end

