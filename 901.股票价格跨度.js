/*
 * @lc app=leetcode.cn id=901 lang=javascript
 *
 * - 直接维护一个单调递减的栈
 * - 目的是为了让当前这个比较大的数，去找到栈内的离自己最远的小数
 * 
 * - 这道题还有更快的方法
 * - 记录每一个数的上一个自己大的数的位置
 * - 思路跟单调栈是一样的，但是具体实现有所调整
 * [901] 股票价格跨度
 */

// @lc code=start

var StockSpanner = function () {
    this.stockPrice = []
    this.nextCount = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    if (price == null) return null;
    if (this.nextCount.length === 0) {
        this.stockPrice.push(price);
        this.nextCount.push(1);
        return 1
    };
    let curIndex = this.stockPrice.length - 1;
    let res = 1;
    while (price >= this.stockPrice[curIndex] && curIndex >= 0) {
        res += this.nextCount[curIndex];
        curIndex -= this.nextCount[curIndex];   //向前跳转
    }
    this.stockPrice.push(price);
    this.nextCount.push(res);
    return res;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end

