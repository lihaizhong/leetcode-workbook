"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function levensheinDistance(source, target) {
    const sourceLength = source.length;
    const targetLength = target.length;
    if (sourceLength === 0) {
        return targetLength;
    }
    if (targetLength === 0) {
        return sourceLength;
    }
    const space = new Array(targetLength);
    for (let i = 0; i < sourceLength; i++) {
        const sourceChar = source[i];
        let temp = i;
        for (let j = 0; j < targetLength; j++) {
            const targetChar = target[j];
            const prevDistance = j === 0 ? i + 1 : space[j - 1];
            const topDistance = space[j] === undefined ? j + 1 : space[j];
            const flag = sourceChar === targetChar ? 0 : 1;
            const min = Math.min(prevDistance + 1, topDistance + 1, temp + flag);
            temp = topDistance;
            space[j] = min;
        }
    }
    return space[targetLength - 1];
}
exports.default = levensheinDistance;
//# sourceMappingURL=index.js.map