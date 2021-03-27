/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉K位数字
 */

// @lc code=start
/**
 * - 本题跟其他单调栈问题不太一样
 * - 为了使剩下的数字最小，这个数字的每一位最好是单调递增的
 * - 所以我们需要维护一个单调递增的栈，并且栈内的元素就是最终的答案
 * - 而其他单调栈问题都是“弹出来的元素经过一些计算”作为答案的
 * - 本题是栈内元素为答案
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    let stack = [];
    let res = ""
    for (let i = 0; i < num.length; i++) {
        while (stack.length > 0 && k > 0 && num[stack[stack.length - 1]] > num[i]) {
            k--;
            stack.pop()
        }
        stack.push(i);
    }
    let zeroFlag = false

    for (let i = 0; i < stack.length - k; i++) {
        if (!zeroFlag && num[stack[i]] === "0") {
            continue;
        }
        if (num[stack[i]] !== "0" || zeroFlag) {
            res += num[stack[i]];
            zeroFlag = true
        }
    }
    if(res.length === 0) return "0"
    return res;

};
// @lc code=end

