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
    let baseCharacterMap = new Map([
        [0, '0'],
        [1, '1'],
        [2, '2'],
        [3, '3'],
        [4, '4'],
        [5, '5'],
        [6, '6'],
        [7, '7'],
        [8, '8'],
        [9, '9'],
        [10, 'A'],
        [11, 'B'],
        [12, 'C'],
        [13, 'D'],
        [14, 'E'],
        [15, 'F'],
        [16, 'G'],
        [17, 'H'],
        [18, 'I'],
        [19, 'K'],
        [20, 'L'],
        [21, 'M'],
        [22, 'O'],
        [23, 'P'],
        [24, 'Q'],
        [25, 'R'],
        [26, 'S'],
        [27, 'T'],
        [28, 'U'],
        [29, 'V'],
        [30, 'W'],
        [31, 'X'],
        [32, 'Y'],
        [33, 'Z']
    ]);
    exports.default = baseCharacterMap;
});
//# sourceMappingURL=baseMap.js.map