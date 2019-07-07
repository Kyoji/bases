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
    const stringToArray = function (str) {
        let i = 0;
        let arr = [];
        for (i; i < str.length; i++) {
            arr[i] = str[i];
        }
        return arr;
    };
    exports.default = stringToArray;
});
//# sourceMappingURL=stringToArray.js.map