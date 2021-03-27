/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const arr = s.split(" ");
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].length > 0) {
            return arr[i].length
        }
    }
    return 0
};
// @lc code=end

