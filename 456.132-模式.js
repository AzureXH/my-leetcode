/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132模式
 */

// @lc code=start
/**
 * 利用单调栈去维护k值
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    let stack = []
    let midK = Number.MIN_SAFE_INTEGER;
    const len = nums.length
    for (let i = len - 1; i >= 0; i--) {
        if (nums[i] < midK) {
            return true
        }
        while (stack.length > 0 && nums[i] > stack[stack.length - 1]) midK = Math.max(midK, stack.pop());
        stack.push(nums[i]);
    }
    return false
};
// @lc code=end

