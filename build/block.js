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
        constructor(multiplier, base, power) {
            this.bits = [];
            this.base = '10';
            this.power = '0';
            this.multiplier = multiplier;
            this.contains = 0;
            this.base = base.toString();
            this.power = power.toString();
            this.createHTML();
        }
        createHTML() {
            this.blockContainer = document.createElement('div');
            this.bitContainer = document.createElement('div');
            this.bitContainer.classList.add('bit-container');
            this.blockElement = document.createElement('div');
            this.valueContainer = document.createElement('div');
            this.valueContainer.classList.add('value-label');
            this.baseLabel = document.createElement('div');
            this.powerLabel = document.createElement('div');
            this.baseLabel.classList.add('base-label');
            this.powerLabel.classList.add('power-label');
            this.baseLabel.innerHTML = this.base;
            this.powerLabel.innerHTML = this.power;
            this.blockContainer.classList.add('block-container');
            this.blockElement.classList.add('block');
            this.blockElement.classList.add('zero');
            this.blockElement.innerHTML = '0';
            this.blockContainer.append(this.bitContainer);
            this.blockContainer.append(this.blockElement);
            this.valueContainer.append(this.baseLabel, this.powerLabel);
            this.blockContainer.append(this.valueContainer);
        }
        update(number, isZero, base) {
            this.base = base.toString();
            this.baseLabel.innerHTML = this.base;
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