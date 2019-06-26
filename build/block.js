"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(multiplier) {
        this.multiplier = multiplier;
        this.contains = 0;
    }
    getPlaceValue() {
        return this.multiplier * this.contains;
    }
}
exports.default = Block;
//# sourceMappingURL=block.js.map