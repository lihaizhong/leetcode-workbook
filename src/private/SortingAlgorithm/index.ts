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
export function mergeSort(arr: number[]): void {
  if (arr.length < 2) {
    return;
  }

  const middleIndex = (arr.length / 2) << 2;
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex);

  // merge start
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while(right.length) {
    result.push(right.shift());
  }
  // merge end
}
// #endregion merge-sort

/**
 * 快速排序<交换排序>
 */
// #region quick-sort
function partition(arr: number[], low: number, high: number): number {
  let pivot = arr[low];

  while (low < high) {
    while (low < high && arr[high] > pivot) {
      --high;
    }

    arr[low] = arr[high];
    while (low < high && arr[low] <= pivot) {
      ++low;
    }

    arr[high] = arr[low];
  }

  arr[low] = pivot;

  return low;
}

export function quickSort(arr: number[], low: number, high: number): void {
  if (low < high) {
    let pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
}
// #endregion quick-sort

/**
 * 堆排序<选择排序>
 */
// #region heap-sort
export function heapSort(arr: number[]): void {
  
}
// #endregion heap-sort

/**
 * 计数排序
 */
// #region counting-sort
export function countingSort(arr: number[]): void {}
// #endregion counting-sort

/**
 * 桶排序
 */
// #region bucket-sort
export function bucketSort(arr: number[]): void {}
// #endregion bucket-sort

/**
 * 基数排序
 */
// #region radix-sort
export function radixSort(arr: number[]): void {}
// #endregion radix-sort
