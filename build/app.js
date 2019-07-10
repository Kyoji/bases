(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./base"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const base_1 = require("./base");
    class App {
        constructor(base, value) {
            this.bytes = 8;
            this.baseTo = new base_1.default(+base, this.bytes, 'baseto');
            this.baseFrom = new base_1.default(10, this.bytes, 'basefrom');
        }
        update(number, base) {
            console.log(base);
            this.baseFrom.insert(number);
            this.baseTo.base = +base;
            this.baseTo.reset();
            this.baseTo.convert(this.baseFrom);
        }
        watch(input, base) {
            if (input.value !== '') {
                app.update(input.value, base);
            }
            else {
                app.update('0', base);
            }
        }
    }
    const inputFrom = document.getElementById("input-from");
    const inputBase = document.getElementById("input-base");
    inputFrom.value = '110';
    inputBase.value = '16';
    let app = new App(inputBase.value, inputFrom.value);
    const test = document.getElementById('base-wrapper');
    test.appendChild(app.baseTo.blockContainer);
    test.appendChild(app.baseFrom.blockContainer);
    app.watch(inputFrom, inputBase.value);
    inputFrom.addEventListener("keyup", function (e) {
        app.watch(inputFrom, inputBase.value);
    });
    inputBase.addEventListener("keyup", function (e) {
        console.log(inputBase.value);
        app.watch(inputFrom, inputBase.value);
    });
});
//# sourceMappingURL=app.js.map