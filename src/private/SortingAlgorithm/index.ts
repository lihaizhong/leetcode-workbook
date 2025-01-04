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
 * 快速排序<交换排序>
 * @param arr
 */
// #region quick-sort
export function quickSort(arr: number[]): void {
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
// #endregion quick-sort

/**
 * 简单选择排序<选择排序>
 */
export function simpleSelectionSort() {}

/**
 * 堆排序<选择排序>
 */
export function heapSort() {}

/**
 * 简单插入排序<插入排序>
 */
export function simpleInsertionSort() {}

/**
 * 希尔排序<插入排序>
 */
export function shellSort() {}

/**
 * 归并排序
 */
export function mergeSort() {}

/**
 * 基数排序
 */
export function radixSort() {}

/**
 * 计数排序
 */
export function countingSort() {}

/**
 * 桶排序
 */
export function bucketSort() {}
