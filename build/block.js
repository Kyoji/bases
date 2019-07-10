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
        update(number, isZero) {
            this.contains = +number;
            this.addZero(isZero);
            this.blockElement.innerHTML = number;
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
    }
    exports.default = Block;
});
//# sourceMappingURL=block.js.map