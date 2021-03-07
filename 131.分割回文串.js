/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start

var isReverseStr = {};
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const backtrack = (i) => {
        if (i === n) {
            res.push(stack.slice())
            return
        }
        for (let j = i; j < n; j++) {
            if (f[i][j]) {
                stack.push(s.slice(i, j + 1))
                backtrack(j + 1);
                stack.pop();
            }
        }
    }
    const n = s.length
    const f = new Array(n).fill(0).map(() => new Array(n).fill(true));
    const res = [], stack = [];
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            f[i][j] = s[i] === s[j] && f[i + 1][j - 1]
        }
    }
    backtrack(0)
    return res
};

// @lc code=end

