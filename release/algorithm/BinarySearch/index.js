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
    const compare = (a, b) => {
        // 目标值小了
        if (a < b) {
            return -1;
        }
        // 目标值大了
        if (a > b) {
            return 1;
        }
        // 目标值匹配成功
        return 0;
    };
    /**
     * 二分查找法
     * @param target
     * @param list
     * @param internal_compare
     * @returns
     */
    function BinarySearch(target, list, internal_compare = compare) {
        let low = 0;
        let high = list.length - 1;
        do {
            const middle = Math.round(low + high);
            const status = internal_compare(target, list[middle]);
            if (status === 0) {
                return list[middle];
            }
            if (status === 1) {
                low = middle;
            }
            else {
                high = middle;
            }
        } while (low !== high);
        return null;
    }
    exports.default = BinarySearch;
});
//# sourceMappingURL=index.js.map