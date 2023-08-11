/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // @lc code=start
    function longestCommonPrefix(strs) {
        let prefix = '';
        for (let i = 0; i < strs[0].length; i++) {
        }
        return prefix;
    }
    ;
    // @lc code=end
    exports.default = longestCommonPrefix;
});
//# sourceMappingURL=14.%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%89%8D%E7%BC%80.js.map