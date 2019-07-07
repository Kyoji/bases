(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Block {
        constructor(multiplier) {
            this.multiplier = multiplier;
            this.contains = 0;
            this.createHTML();
        }
        createHTML() {
            this.blockContainer = document.createElement('div');
            this.blockElement = document.createElement('div');
            this.blockContainer.classList.add('block-container');
            this.blockElement.classList.add('block');
            this.blockElement.classList.add('zero');
            this.blockElement.innerHTML = '0';
            this.blockContainer.append(this.blockElement);
        }
        update(number) {
            this.contains = +number;
            if (number === '0') {
                this.isZero();
            }
            else {
                this.isNotZero();
            }
            this.blockElement.innerHTML = number;
            console.log(this.blockElement);
        }
        isZero() {
            this.blockElement.classList.add('zero');
        }
        isNotZero() {
            this.blockElement.classList.remove('zero');
        }
    }
    exports.default = Block;
});
//# sourceMappingURL=block.js.map