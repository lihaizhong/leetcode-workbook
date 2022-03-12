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
    /**
     * 洗牌算法（FisherYatesShuffle）
     * @param {array<number>} values
     */
    function shuffle(values) {
        for (let i = 0; i < values.length; i++) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            const itemAtIndex = values[i];
            values[i] = values[randomIndex];
            values[randomIndex] = itemAtIndex;
        }
        return values;
    }
    exports.default = shuffle;
});
//# sourceMappingURL=index.js.map