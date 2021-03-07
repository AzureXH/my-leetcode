/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let n = nums.length
    let indexStack = [];
    let res = new Array(n).fill(-1)
    for (let i = 0; i < 2 * n - 1; i++) {
        while (indexStack.length > 0 && nums[i % n] > nums[indexStack[indexStack.length - 1]]) {
            res[indexStack[indexStack.length - 1]] = nums[i % n];
            indexStack.pop()
        }
        indexStack.push(i % n);
    }
    return res
};
// @lc code=end

