/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/solution/liang-shu-zhi-he-by-leetcode-solution/
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 *
 * 方法一：暴力枚举
 * 方法二：哈希表
 */

// #region two-sum-1
export function twoSum1(nums: number[], target: number): number[] {
  const { length } = nums;

  for (let i = 0; i < length; i++) { // N
    const n2 = target - nums[i]!

    for (let j = i + 1; j < length; j++) { // N
      if (nums[j] === n2) {
        return [i, j]
      }
    }
  }

  return [];
}
// #endregion two-sum-1

// @lc code=start
// #region two-sum
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const n1 = nums[i]!;
    const n2 = target - n1;

    if (map.has(n2)) {
      return [map.get(n2), i];
    }

    map.set(n1, i);
  }

  return [];
}
// #endregion two-sum
// @lc code=end

export default twoSum;
