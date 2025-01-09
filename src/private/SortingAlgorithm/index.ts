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
export function insertionSort(arr: number[]): void {
  let preIndex: number;
  let current: number;

  for (let i = 1; i < arr.length; i++) {
    preIndex = i - 1;
    current = arr[i];

    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }

    arr[preIndex + 1] = current;
  }
}
// #endregion insertion-sort

/**
 * 希尔排序<插入排序>
 */
// #region shell-sort
export function shellSort(arr: number[]): void {
  // number pre column
  const npc = 3;
  let gap = 1;

  // 动态定义间隔数列
  while (gap < arr.length / npc) {
    gap = gap * npc + 1;
  }

  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      const tmp = arr[i];
      let j = i - gap;

      for (; j >= 0 && arr[j] > tmp; j -= gap) {
        arr[j + gap] = arr[j];
      }

      arr[j + gap] = tmp;
    }

    gap = Math.floor(gap / npc)
  }
}
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
