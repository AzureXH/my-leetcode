/*
 * @lc app=leetcode.cn id=1800 lang=javascript
 *
 * [1800] 最大升序子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAscendingSum = function (nums) {
    let sum = nums[0];
    let res = sum;
    nums.reduce((pre, cur) => {
        if (cur > pre) {
            sum += cur;
            res = Math.max(sum, res);
        }
        else {
            sum = cur;
        }
        return cur
    })
    return res
};
// @lc code=end

