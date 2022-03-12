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
    exports.RadixSort = exports.MergeSort = exports.ShellSort = exports.SimpleInsertionSort = exports.HeapSort = exports.SimpleSelectionSort = exports.QuickSort = exports.BubbleSort = void 0;
    /**
     * 冒泡排序<交换排序>
     */
    function BubbleSort() { }
    exports.BubbleSort = BubbleSort;
    /**
     * 快速排序<交换排序>
     */
    function QuickSort() { }
    exports.QuickSort = QuickSort;
    /**
     * 简单选择排序<选择排序>
     */
    function SimpleSelectionSort() { }
    exports.SimpleSelectionSort = SimpleSelectionSort;
    /**
     * 堆排序<选择排序>
     */
    function HeapSort() { }
    exports.HeapSort = HeapSort;
    /**
     * 简单插入排序<插入排序>
     */
    function SimpleInsertionSort() { }
    exports.SimpleInsertionSort = SimpleInsertionSort;
    /**
     * 希尔排序<插入排序>
     */
    function ShellSort() { }
    exports.ShellSort = ShellSort;
    /**
     * 归并排序
     */
    function MergeSort() { }
    exports.MergeSort = MergeSort;
    /**
     * 基数排序
     */
    function RadixSort() { }
    exports.RadixSort = RadixSort;
});
//# sourceMappingURL=index.js.map