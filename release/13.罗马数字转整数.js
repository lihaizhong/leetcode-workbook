function romanToInt(s) {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    let result = 0;
    let lastValue = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        const value = map.get(char);
        result += lastValue < value ? value - 2 * lastValue : value;
        lastValue = value;
    }
    return result;
}
;
export default romanToInt;
