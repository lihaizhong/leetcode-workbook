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
//# sourceMappingURL=1.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.js.map