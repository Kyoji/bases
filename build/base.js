(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./block", "./baseCharacterMap"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const block_1 = require("./block");
    const baseCharacterMap_1 = require("./baseCharacterMap");
    class Base {
        constructor(base, bytes, id) {
            this.blocks = [];
            this.placesSig = 0;
            this.placesZero = this.length;
            this.base = base;
            this.length = bytes;
            this.blocksInit();
            this.generateHTML(id);
        }
        blocksInit() {
            let i = 0;
            for (i; i < this.length; i++) {
                let multiplier = Math.pow(this.base, i);
                let block = new block_1.default(multiplier, this.base, (this.length - 1) - i);
                this.blocks.push(block);
            }
        }
        blocksReset() {
            let i = 0;
            for (i; i < this.length; i++) {
                let multiplier = Math.pow(this.base, i);
                this.blocks[i].multiplier = multiplier;
                this.blocks[i].update('0', true, this.base);
            }
        }
        insert(number) {
            if (number.length > this.length) {
                console.log("Number too long!");
                return;
            }
            this.placesSig = 0;
            this.placesZero = 0;
            this.value = number;
            let i = 0;
            let offset = this.length - number.length;
            for (i; i < offset; i++) {
                this.blocks[i].update('0', true, this.base);
            }
            for (i; i < this.length; i++) {
                this.blocks[i].update(number[i - offset], false, this.base);
                this.placesSig++;
            }
            this.placesZero = this.length - this.placesSig;
        }
        reset() {
            this.blocksReset();
            this.placesSig = 0;
            this.placesZero = 0;
        }
        convert(baseFrom) {
            this.reset();
            let decValue = +baseFrom.value;
            let convertedString = '';
            let sigFig = false;
            let i = this.length - 1;
            for (i; i >= 0; i--) {
                let blockValue = 0;
                while (decValue >= this.blocks[i].multiplier) {
                    blockValue++;
                    decValue -= this.blocks[i].multiplier;
                }
                switch (blockValue) {
                    case 0:
                        if (sigFig)
                            convertedString += baseCharacterMap_1.default.get(blockValue);
                        break;
                    default:
                        convertedString += baseCharacterMap_1.default.get(blockValue);
                        sigFig = true;
                        break;
                }
            }
            this.insert(convertedString);
            console.log(this.placesSig - 1);
            if (this.blocks[this.placesSig - 1].contains > this.base) {
                console.log('Result greater than ' + (this.length * 4) + '-bit!');
            }
        }
        generateHTML(id) {
            this.blockContainer = document.createElement('div');
            this.blockContainer.classList.add('base');
            this.blockContainer.id = id;
            for (let i = 0; i < this.length; i++) {
                this.blockContainer.append(this.blocks[i].blockContainer);
            }
            return this.blockContainer;
        }
    }
    exports.default = Base;
});
//# sourceMappingURL=base.js.map