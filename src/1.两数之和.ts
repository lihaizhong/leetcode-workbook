/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    const num2 = target - num1;

    if (map.has(num2)) {
      return [map.get(num2), i];
    }

    map.set(num1, i);
  }

  return [];
}
// @lc code=end
