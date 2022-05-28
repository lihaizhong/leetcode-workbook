"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convert(s, numRows) {
    if (numRows < 1) {
        return s;
    }
    const len = s.length;
    const oneCycle = 2 * numRows - 2;
    const n = Math.ceil(len / oneCycle);
    let zStr = "";
    for (let i = 0; i < len; i++) {
        let c;
        if (i < n || i > (numRows - 1) * n) {
            const r = i % oneCycle;
            c = s.charAt(oneCycle * (n - 1) + r);
        }
        else {
            if (i % oneCycle < numRows) {
                const r = i % oneCycle;
                c = s.charAt(oneCycle * (n - 1) + r);
            }
            else {
                const r = 2 * oneCycle - 2 - (i % oneCycle);
                c = s.charAt(oneCycle * n - r);
            }
        }
        if (typeof c === "string") {
            zStr += c;
        }
    }
    return zStr;
}
exports.default = convert;
