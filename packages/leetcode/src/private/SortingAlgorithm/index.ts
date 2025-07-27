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
  const lastIndex = arr.length - 1;

  for (let i = 0; i < lastIndex; i++) {
    // 因为每次冒泡都会将最大的元素放到最后，所以下一次冒泡就不需要比较最后一个元素
    for (let j = 0; j < lastIndex - i; j++) {
      // 如果前一个元素大于后一个元素，则交换
      if (arr[j]! > arr[j + 1]!) {
        const tmp = arr[j]!;
        arr[j] = arr[j + 1]!;
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
      if (arr[minIndex]! > arr[j]!) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const tmp = arr[i]!;
      arr[i] = arr[minIndex]!;
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
    current = arr[i]!;

    while (preIndex >= 0 && arr[preIndex]! > current) {
      arr[preIndex + 1] = arr[preIndex]!;
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
      const tmp = arr[i]!;
      let j = i - gap;

      for (; j >= 0 && arr[j]! > tmp; j -= gap) {
        arr[j + gap] = arr[j]!;
      }

      arr[j + gap] = tmp;
    }

    gap = Math.floor(gap / npc);
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
    if (left[0]! <= right[0]!) {
      result.push(left.shift()!);
    } else {
      result.push(right.shift()!);
    }
  }

  while (left.length) {
    result.push(left.shift()!);
  }

  while (right.length) {
    result.push(right.shift()!);
  }
  // merge end
}
// #endregion merge-sort

/**
 * 快速排序<交换排序>
 */
// #region quick-sort
function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[low]!;
  let l = low;
  let h = high;

  while (l < h) {
    while (l < h && arr[h]! > pivot) {
      --h;
    }

    arr[l] = arr[h]!;
    while (l < h && arr[l]! <= pivot) {
      ++l;
    }

    arr[h] = arr[l]!;
  }

  arr[l] = pivot;

  return l;
}

export function quickSort(arr: number[], low: number, high: number): void {
  if (low < high) {
    const pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
}
// #endregion quick-sort

/**
 * 堆排序<选择排序>
 */
// #region heap-sort
function heapify(arr: number[], i: number, len: number): void {
  const left = i * 2 + 1;
  const right = i * 2 + 2;
  let largest = i;

  if (left < len && arr[left]! > arr[largest]!) {
    largest = left;
  }

  if (right < len && arr[right]! > arr[largest]!) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, largest, len);
  }
}

function swap(arr: number[], i: number, j: number): void {
  const tmp = arr[i]!;

  arr[i] = arr[j]!;
  arr[j] = tmp;
}

export function heapSort(arr: number[]): void {
  // 建立大顶堆
  for (let i = (arr.length / 2) << 0; i >= 0; i--) {
    // 从第一个非叶子结点从下至上，从右至左调整结构
    heapify(arr, i, arr.length);
  }

  // 调整堆结构 + 交换堆顶元素与末尾元素
  for (let i = arr.length - 1; i > 0; i--) {
    // 将堆顶元素与末尾元素进行交换
    swap(arr, 0, i);
    // 重新对堆进行调整
    heapify(arr, 0, i);
  }
}
// #endregion heap-sort

/**
 * 计数排序
 */
// #region counting-sort
export function countingSort(arr: number[], maxValue: number): void {
  const bucketLength = maxValue + 1;
  const bucket = new Array(bucketLength);
  const length = arr.length;
  let sortedIndex = 0;

  for (let i = 0; i < length; i++) {
    const value = arr[i]!;

    if (!bucket[value]) {
      bucket[value] = 0;
    }

    bucket[value]++;
  }

  for (let j = 0; j < bucketLength; j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }
}
// #endregion counting-sort

/**
 * 桶排序
 */
// #region bucket-sort
export function bucketSort(arr: number[], bucketSize: number = 5): void {
  const { length } = arr;

  if (length === 0) {
    return;
  }

  let minValue = arr[0]!;
  let maxValue = arr[0]!;

  for (let i = 1; i < length; i++) {
    const value = arr[i]!;

    if (value < minValue) {
      // 输入数据的最小值
      minValue = value;
    } else if (value > maxValue) {
      // 输入数据的最大值
      maxValue = value;
    }
  }

  // 桶的初始化
  const bucketCount = ~~((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount);

  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  // 利用映射函数将数据分配到各个桶中
  for (let i = 0; i < length; i++) {
    const value = arr[i]!;

    buckets[~~((value - minValue) / bucketSize)].push(value);
  }

  arr.length = 0;

  for (let i = 0; i < bucketCount; i++) {
    // 对每个桶进行排序，这里使用了插入排序
    insertionSort(buckets[i]);

    for (let j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j]);
    }
  }
}
// #endregion bucket-sort

/**
 * 基数排序
 */
// #region radix-sort
export function radixSort(arr: number[], maxDigit: number): void {
  const counter: number[][] = [];
  let mod = 10;
  let dev = 1;

  for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (let j = 0; j < arr.length; j++) {
      const bucket = ~~((arr[j]! % mod) / dev);

      if (counter[bucket] == null) {
        counter[bucket] = [];
      }

      counter[bucket].push(arr[j]!);
    }

    let pos = 0;
    for (let j = 0; j < counter.length; j++) {
      let value: number | null | undefined = null;

      if (counter[j] != null) {
        while ((value = counter[j]!.shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
}
// #endregion radix-sort
