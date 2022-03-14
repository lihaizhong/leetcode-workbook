/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  const map = new Map();
  let result: number = 0;
  let lastValue: number = 0;

  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  for (let i = 0; i < s.length; i++) {
    const char: string = s.charAt(i);
    const value: number = map.get(char);

    result += lastValue < value ? value - 2 * lastValue : value;
    lastValue = value;
  }

  return result;
};
// @lc code=end

