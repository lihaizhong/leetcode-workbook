/**
 * 十大排序算法
 * https://www.runoob.com/w3cnote/ten-sorting-algorithm.html
 */

/**
 * 冒泡排序<交换排序>
 * @param arr
 */
// #region bubble-sort
export function bubbleSort(arr: number[]): void {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // 如果前一个元素大于后一个元素，则交换
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}
// #endregion bubble-sort

/**
 * 选择排序<选择排序>
 * @param arr
 */
// #region selection-sort
export function selectionSort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    let minIndex: number = i;

    for (let j = i + 1; j < arr.length; j++) {
      // 如果当前最小的元素大于比较的元素，则交换
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }
  }
}
// #endregion selection-sort

/**
 * 插入排序
 * @param arr
 */
// #region insertion-sort
export function insertionSort(arr: number[]): void {}
// #endregion insertion-sort

/**
 * 希尔排序<插入排序>
 */
// #region shell-sort
export function shellSort() {}
// #endregion shell-sort

/**
 * 归并排序
 */
// #region merge-sort
export function mergeSort() {}
// #endregion merge-sort

/**
 * 快速排序<交换排序>
 */
// #region quick-sort
export function quickSort() {}
// #endregion quick-sort

/**
 * 堆排序<选择排序>
 */
// #region heap-sort
export function heapSort() {}
// #endregion heap-sort

/**
 * 计数排序
 */
// #region counting-sort
export function countingSort() {}
// #endregion counting-sort

/**
 * 桶排序
 */
// #region bucket-sort
export function bucketSort() {}
// #endregion bucket-sort

/**
 * 基数排序
 */
// #region radix-sort
export function radixSort() {}
// #endregion radix-sort
