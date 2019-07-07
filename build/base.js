(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./block", "./baseMap"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const block_1 = require("./block");
    const baseMap_1 = require("./baseMap");
    class Base {
        constructor(base, bytes, id) {
            this.blocks = [];
            this.places = 0;
            this.zeroes = this.bytes;
            this.base = base;
            this.bytes = bytes;
            this.blocksInit();
            this.blockContainer = document.createElement('div');
            this.blockContainer.classList.add('base');
            this.blockContainer.id = id;
            this.getHTML();
        }
        blocksInit() {
            let i = 0;
            for (i; i < this.bytes; i++) {
                let multiplier = Math.pow(this.base, i);
                let block = new block_1.default(multiplier);
                this.blocks.push(block);
            }
        }
        blocksReset() {
            let i = 0;
            for (i; i < this.bytes; i++) {
                this.blocks[i].update('0');
            }
        }
        insert(number) {
            this.places = 0;
            this.zeroes = 0;
            if (number.length > this.bytes) {
                alert("Number too long!");
                return;
            }
            this.value = number;
            // console.log(this.value);
            let i = 0;
            let offset = this.bytes - number.length;
            for (i; i < offset; i++) {
                this.blocks[i].update('0');
            }
            for (i; i < this.bytes; i++) {
                this.blocks[i].update(number[i - offset]);
                this.places++;
            }
            this.zeroes = this.bytes - this.places;
        }
        reset() {
            this.blocksReset();
            this.places = 0;
            this.zeroes = 0;
        }
        convert(baseFrom) {
            this.reset();
            let i = this.bytes - 1;
            let decValue = +baseFrom.value;
            // TODO: Create reverse basemap lookup to do this properly
            for (i; i >= 0; i--) {
                let blockValue = this.blocks[i].contains;
                while (decValue >= this.blocks[i].multiplier) {
                    blockValue++;
                    decValue -= this.blocks[i].multiplier;
                }
                // This conditional applies only once to catch the highest place!
                if (blockValue > 0 && this.places === 0) {
                    this.places = i + 1;
                }
                this.blocks[(this.bytes - 1) - i].update(baseMap_1.default.get(blockValue));
            }
            this.zeroes = this.bytes - this.places;
            if (this.blocks[this.places - 1].contains > this.base) {
                console.log('Result greater than ' + (this.bytes * 4) + '-bit!');
            }
        }
        output() {
            let i = this.bytes - 1;
            let output = '';
            // Write value
            for (i; i >= 0; i--) {
                if (this.blocks[i].contains > 9) {
                    output += baseMap_1.default.get(this.blocks[i].contains);
                }
                else {
                    output += this.blocks[i].contains.toString();
                }
            }
            return output;
        }
        getHTML() {
            for (let i = 0; i < this.bytes; i++) {
                this.blockContainer.append(this.blocks[i].blockContainer);
            }
            return this.blockContainer;
        }
        updateBlocksHTML() {
            let i = 0;
            for (i; i < this.bytes; i++) {
                this.blocks[i].isNotZero();
                if (i < this.zeroes) {
                    this.blocks[i].isZero();
                }
                this.blocks[i].update(this.value[i]);
            }
        }
    }
    exports.default = Base;
});
//# sourceMappingURL=base.js.map