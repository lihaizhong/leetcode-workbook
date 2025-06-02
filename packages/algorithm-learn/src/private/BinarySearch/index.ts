export type ICompare = (a: number, b: number) => number;

export const compare: ICompare = (a: number, b: number) => {
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
export default function BinarySearch(
  target: number,
  list: number[],
  internal_compare: ICompare = compare
): number | null {
  let low = 0;
  let high: number = list.length - 1;

  do {
    const middle: number = Math.round(low + high);
    const status: number = internal_compare(target, list[middle]);

    if (status === 0) {
      return list[middle];
    }

    if (status === 1) {
      low = middle;
    } else {
      high = middle;
    }
  } while (low !== high);

  return null;
}
