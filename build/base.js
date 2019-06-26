"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_1 = require("./block");
class Base {
    constructor(base, bytes) {
        this.blocks = [];
        this.places = 0;
        this.base = base;
        this.bytes = bytes;
        this.blocksInit();
    }
    blocksInit() {
        let i = 0;
        for (i; i < this.bytes; i++) {
            let multiplier = Math.pow(this.base, i);
            let block = new block_1.default(multiplier);
            this.blocks.push(block);
        }
    }
    insert(number) {
        if (number.length > this.bytes) {
            alert("Number too long!");
            return;
        }
        let i = 0;
        let offset = number.length - 1;
        for (i; i < number.length; i++) {
            this.blocks[i].contains = +number[offset - i];
            this.places++;
        }
    }
    reset() {
        this.blocks = [];
        this.places = 0;
    }
    convert(baseFrom) {
        let offset = baseFrom.places - 1;
        // let i = 0;
        let decValue = 0;
        for (offset; offset >= 0; offset--) {
            decValue += baseFrom.blocks[offset].getPlaceValue();
            while (decValue >= this.blocks[offset].multiplier) {
                this.blocks[offset].contains++;
                decValue -= this.blocks[offset].multiplier;
            }
        }
        offset = 0;
        while (this.blocks[offset].contains >= this.base) {
            this.blocks[offset].contains -= this.base;
            offset++;
            this.blocks[offset].contains++;
        }
    }
}
exports.default = Base;
//# sourceMappingURL=base.js.map