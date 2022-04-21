function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        const tmp = nums1;
        nums1 = nums2;
        nums2 = tmp;
    }
    let m = nums1.length;
    let n = nums2.length;
    const totalLeft = Math.floor((m + n + 1) / 2);
    let left = 0;
    let right = m;
    while (left < right) {
        const i = left + Math.floor((right - left + 1) / 2);
        const j = totalLeft - i;
        if (nums1[i - 1] > nums2[j]) {
            right = i - 1;
        }
        else {
            left = i;
        }
    }
    const i = left;
    const j = totalLeft - i;
    const num1LeftMax = i === 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1];
    const num1RightMin = i === m ? Number.MAX_SAFE_INTEGER : nums1[i];
    const num2LeftMax = j === 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1];
    const num2RightMin = j === n ? Number.MAX_SAFE_INTEGER : nums2[j];
    return (m + n) % 2 === 1
        ? Math.max(num1LeftMax, num2LeftMax)
        : (Math.max(num1LeftMax, num2LeftMax) +
            Math.min(num1RightMin, num2RightMin)) /
            2;
}
export default findMedianSortedArrays;
