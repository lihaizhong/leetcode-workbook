"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shuffle(values) {
    for (let i = 0; i < values.length; i++) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const itemAtIndex = values[i];
        values[i] = values[randomIndex];
        values[randomIndex] = itemAtIndex;
    }
    return values;
}
exports.default = shuffle;
//# sourceMappingURL=index.js.map