"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function twoSum(nums, target) {
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
exports.default = twoSum;
