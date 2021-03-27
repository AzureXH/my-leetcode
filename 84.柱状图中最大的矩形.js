/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * - 把题目理解成，每一个i位置上的柱子，向左向右延伸所能得到的最大面积
 * - 需要向左找到第一个比第i根柱子要矮的柱子1
 * - 同理，需要向右找到第一个比第i根柱子要矮的柱子2
 * - 这是暴力解法的想法
 * - 那么我们通过从左往右遍历，
 * - 维护一个单调递增的栈，栈内的每一个柱子下面的柱子全是比他矮的柱子1
 * - 同时，遍历的过程中遇到了一个比栈顶要矮的柱子时，也可以得到2，那么就可以计算面积了
 * - 特殊情况，如果有连续相同高度的柱子
 * - 那么也压进栈，最终会由最左边的相同高度的柱子来计算出一个最大面积
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    heights.push(0);
    const stack = []
    let res = 0;
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            let h = heights[stack[stack.length - 1]];
            stack.pop();
            let widx = stack.length > 0 ? stack[stack.length - 1] : -1;
            res = Math.max(res, h * (i - widx - 1));
        }
        stack.push(i);
    }
    return res;
};
// @lc code=end

