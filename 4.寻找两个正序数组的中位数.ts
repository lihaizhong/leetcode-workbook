/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start

/**
 * 方式一
 * 这种方式最简单粗暴，将两个数组合并
 * 然后重新进行排序，这样就重新得到一个有序数组
 * 最后，取数组中位数即可获取最后结果
 * * 时间复杂度为O(m+n)  空间复杂度为O(m+n)
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums: number[] = nums1.concat(nums2);

  nums.sort((a, b) => a - b);

  if (nums.length % 2 === 0) {
    const middleIndex: number = nums.length / 2;

    return (nums[middleIndex - 1] + nums[middleIndex]) / 2;
  }

  const middleIndex: number = Math.floor(nums.length / 2);

  return nums[middleIndex];
}

/**
 * 方式二
 * 这种方式相比前一种方式优化了空间复杂度
 * 首先，我们可以知道中位数的位置。
 * 然后根据中位数的位置，我们将两个数组做比较操作（变相的排序）
 * 直到比较到中位数为止
 * * 时间复杂度为O(m+n)  空间复杂度为O(1)
 */
// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  
// }
// @lc code=end
