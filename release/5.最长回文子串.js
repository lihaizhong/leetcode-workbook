function palindrome(s, leftIndex, rightIndex) {
    const len = s.length;
    while (leftIndex >= 0 && rightIndex < len && s[leftIndex] === s[rightIndex]) {
        leftIndex--;
        rightIndex++;
    }
    return s.substring(leftIndex + 1, rightIndex);
}
function max(s1, s2, s3) {
    return [s1, s2, s3].reduce((l, r) => (l.length >= r.length ? l : r), "");
}
function longestPalindrome(s) {
    const len = s.length;
    let maxStr = "";
    if (len < 2) {
        return s;
    }
    for (let i = 0; i < len; i++) {
        const s1 = palindrome(s, i, i);
        const s2 = palindrome(s, i, i + 1);
        maxStr = max(maxStr, s1, s2);
    }
    return maxStr;
}
export default longestPalindrome;
