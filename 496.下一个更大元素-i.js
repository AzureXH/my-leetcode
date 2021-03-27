/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let res = new Array(nums1.length).fill(-1)
    let nextGElements = new Array(nums2.length).fill(-1);
    let indexMap = {}
    for (let i = 0; i < nums2.length; i++) {
        indexMap[nums2[i]] = i;
    }
    let stack = [];
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && nums2[stack[stack.length - 1]] < nums2[i]) {
            let nextGIndex = stack.pop();
            nextGElements[nextGIndex] = nums2[i];
        }
        stack.push(i);
    }
    for (let i = 0; i < nums1.length; i++) {
        let index = indexMap[nums1[i]];
        res[i] = nextGElements[index];
    }
    return res;
};
// @lc code=end

