/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const stack = [];
    let res = 0
    for (let i = 0; i < height.length; i++) {
        while (stack.length > 0 && height[stack[stack.length - 1]] < height[i]) {
            const top = stack[stack.length - 1]
            stack.pop()
            if (stack.length <= 0) break;
            let distance = i - stack[stack.length - 1] - 1;
            res += distance * (Math.min(height[i], height[stack[stack.length - 1]]) - height[top])
        }
        stack.push(i)
    }
    return res;
};
// @lc code=end

