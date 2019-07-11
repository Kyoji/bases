(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./baseStringMap"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const baseStringMap_1 = require("./baseStringMap");
    class Block {
        constructor(multiplier) {
            this.bits = [];
            this.multiplier = multiplier;
            this.contains = 0;
            this.createHTML();
        }
        createHTML() {
            this.blockContainer = document.createElement('div');
            this.bitContainer = document.createElement('div');
            this.bitContainer.classList.add('bit-container');
            this.blockElement = document.createElement('div');
            this.blockContainer.classList.add('block-container');
            this.blockElement.classList.add('block');
            this.blockElement.classList.add('zero');
            this.blockElement.innerHTML = '0';
            this.blockContainer.append(this.bitContainer);
            this.blockContainer.append(this.blockElement);
            // this.bits[0] = document.createElement('div') as HTMLDivElement;
            // this.bits[1] = document.createElement('div') as HTMLDivElement;
            // this.bits[0].classList.add('bit');
            // this.bits[1].classList.add('bit');
            // this.bitContainer.append(this.bits[0]);
            // this.bitContainer.append(this.bits[1]);
        }
        update(number, isZero) {
            this.contains = baseStringMap_1.default.get(number);
            this.addZero(isZero);
            this.blockElement.innerHTML = number;
            this.syncBits();
        }
        addZero(isZero) {
            switch (isZero) {
                case true:
                    this.blockElement.classList.add('zero');
                    break;
                case false:
                    this.blockElement.classList.remove('zero');
                    break;
                default:
                    break;
            }
        }
        syncBits() {
            this.bits.forEach((elem, i) => {
                this.bitContainer.removeChild(elem);
            });
            this.bits.length = 0;
            let i = 0;
            for (i; i < this.contains; i++) {
                this.bits[i] = document.createElement('div');
                this.bits[i].classList.add('bit');
                this.bitContainer.append(this.bits[i]);
            }
        }
    }
    exports.default = Block;
});
//# sourceMappingURL=block.js.map