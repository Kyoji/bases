"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_1 = require("./block");
const baseMap_1 = require("./baseMap");
class Base {
    constructor(base, bytes) {
        this.blocks = [];
        this.base = base;
        this.bytes = bytes;
        this.createBlocks();
        console.log(baseMap_1.default.get(16));
    }
    createBlocks() {
        let i = 0;
        for (i; i < this.bytes; i++) {
            let multiplier = Math.pow(this.base, i);
            let block = new block_1.default(multiplier);
            this.blocks.push(block);
        }
    }
    convert(number) {
    }
}
exports.default = Base;
//# sourceMappingURL=base.js.map