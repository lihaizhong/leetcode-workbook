function lengthOfLongestSubstring(s) {
    const saver = new Set();
    const size = s.length;
    let rk = 0;
    let max = 0;
    for (let lk = 0; lk < s.length && rk < size; lk++) {
        if (lk !== 0) {
            saver.delete(s.charAt(lk - 1));
        }
        while (rk < size && !saver.has(s.charAt(rk))) {
            saver.add(s.charAt(rk++));
        }
        max = Math.max(saver.size, max);
    }
    return max;
}
export default lengthOfLongestSubstring;
