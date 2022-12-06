"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compare = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};
function BinarySearch(target, list, internal_compare = compare) {
    let low = 0;
    let high = list.length - 1;
    do {
        const middle = Math.round(low + high);
        const status = internal_compare(target, list[middle]);
        if (status === 0) {
            return list[middle];
        }
        if (status === 1) {
            low = middle;
        }
        else {
            high = middle;
        }
    } while (low !== high);
    return null;
}
exports.default = BinarySearch;
//# sourceMappingURL=index.js.map