/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * 单调递增栈
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    let stack = [];
    let firstNum = null;
    let lastNum = null;
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
            let popNum = stack.pop()
            if (firstNum === null) {
                firstNum = popNum;
            }
            lastNum = popNum;
        }
        stack.push(i);
    }
    if (firstNum === null) return 0;
    return firstNum !== lastNum ? lastNum - firstNum + 2 : nums.length - firstNum;
};
// @lc code=end

