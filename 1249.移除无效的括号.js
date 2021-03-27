/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * - stack用来匹配括号是否正确，并且存放左括号在resS中的位置，用来在最后删除无效的左括号
 * - 对字符串s遍历，如果是右括号，需要看stack的栈顶是否匹配，如果匹配则连接右括号
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let stack = [];
    let resS = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            if (stack.length > 0) { //只放入左括号
                stack.pop();

                resS.push(s[i])
            }
        }
        else if (s[i] === '(') {
            stack.push(resS.length);

            resS.push(s[i])
        }
        else {
            resS.push(s[i]);
        }
    }
    // 删除无效的左括号
    while (stack.length > 0) {
        let index = stack.pop();
        resS.splice(index, 1);
    }

    return resS.join("")
};
// @lc code=end

