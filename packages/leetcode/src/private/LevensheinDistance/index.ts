/**
 * 编辑距离算法(LD algorithm)
 * @param {string} source 输入的内容
 * @param {string} target 匹配的目标
 * @return {number}
 */
export default function levensheinDistance(
  source: string,
  target: string
): number {
  const sourceLength: number = source.length;
  const targetLength: number = target.length;

  // 过滤目标或者比较值为空字符串的情况
  if (sourceLength === 0) {
    return targetLength;
  }

  if (targetLength === 0) {
    return sourceLength;
  }

  const space: number[] = new Array(targetLength);

  for (let i = 0; i < sourceLength; i++) {
    const sourceChar: string = source[i]!;
    let temp: number = i;

    for (let j = 0; j < targetLength; j++) {
      const targetChar: string = target[j]!;
      // 获取前一个数值
      const prevDistance: number = j === 0 ? i + 1 : space[j - 1]!;
      // 获取上一个数值
      const topDistance: number = space[j]! === undefined ? j + 1 : space[j]!;
      // 判断是否需要修改
      const flag: number = sourceChar === targetChar ? 0 : 1;
      // 获取增，删，改和不变得到的最小值
      const min: number = Math.min(
        prevDistance + 1,
        topDistance + 1,
        temp + flag
      );

      // 保存左上角的数据，计算最小值时需要用到
      temp = topDistance;
      space[j] = min;
    }
  }

  // 获取数组的最后一位，即编辑距离
  return space[targetLength - 1]!;
}
