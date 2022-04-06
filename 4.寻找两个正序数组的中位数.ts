/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start

/**
 * 方式一
 * 这种方式最简单粗暴，直接将两个数组合并
 * 然后重新进行排序，这样就重新得到一个有序数组
 * 最后，取数组中位数即可获取最后结果
 * 时间复杂度为O(m+n)  空间复杂度为O(m+n)
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

// 方式二
// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   if (nums1.length < nums2.length) {
//     return findMedianSortedArrays(nums2, nums1);
//   }

//   let midValue: number = 0;
//   let midIndex: number = (nums1.length + nums2.length) / 2
//   let i: number = 0;
//   let j: number = 0;

//   while (i + j < midIndex) {
//     const val1 = nums1[i]
//     const val2 = nums2[j]

//     if (val1 < val2) {
//       i++
//     } else if (val1 > val2) {
//       j++
//     } else {
//       i++
//       j++
//     }
//   }

//   return midValue;
// }
// @lc code=end
