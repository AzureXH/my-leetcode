/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let sortedNums = nums.sort((a,b)=>{
        return a-b
    })
    const len = sortedNums.length
    let res = [];
    for (let i = 0; i < len - 2; i++) {
        let L = i + 1, R = len - 1
        if (sortedNums[i] > 0) break;
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
        while (L < R) {
            if (sortedNums[L] + sortedNums[R] > -sortedNums[i]) {
                while (L < R && sortedNums[R] === sortedNums[--R]);

            }
            else if (sortedNums[L] + sortedNums[R] < - sortedNums[i]) {
                while (L < R && sortedNums[L] === sortedNums[++L]);
            }
            else {
                res.push([sortedNums[i], sortedNums[L], sortedNums[R]])
                while (L < R && sortedNums[R] === sortedNums[--R]);
                while (L < R && sortedNums[L] === sortedNums[++L]);
            }
        }
    }
    return res
};
// @lc code=end

