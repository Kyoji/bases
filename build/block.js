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
        }
    }
    exports.default = Block;
});
//# sourceMappingURL=block.js.map