/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * - next greater element
 * - 为了找到下一个比当前值要大的日期
 * - 利用索引维护一个递减栈，
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    const len = T.length
    let stack = [];
    let res = new Array(len).fill(0)
    for (let i = 0; i < len; i++) {
        while (stack.length > 0 && T[stack[stack.length - 1]] < T[i]) {
            let index = stack[stack.length - 1]
            res[index] = i - index;
            stack.pop();
        }
        stack.push(i);
    }
    return res;
};
// @lc code=end

