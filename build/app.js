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
        constructor(inputFrom, inputBase) {
            this.bytes = 8;
            this.baseTo = new base_1.default(+inputBase.value, this.bytes, 'baseto');
            this.baseFrom = new base_1.default(10, this.bytes, 'basefrom');
            this.inputFrom = inputFrom;
            this.inputBase = inputBase;
            this.update(this.inputFrom.value, this.inputBase.value);
            this.listen();
        }
        update(number, base) {
            this.baseFrom.insert(number);
            this.baseTo.base = +base;
            this.baseTo.reset();
            this.baseTo.convert(this.baseFrom);
        }
        listen() {
            this.inputBase.addEventListener("keyup", (e) => {
                this.cleanUpdateInput(inputBase.value);
            });
            this.inputFrom.addEventListener("keyup", (e) => {
                this.cleanUpdateInput(inputFrom.value);
            });
        }
        cleanUpdateInput(input) {
            switch (input) {
                case '0':
                case '1':
                case '':
                    // this.update('0', '10');
                    return;
                    break;
                default:
                    this.update(this.inputFrom.value, this.inputBase.value);
                    break;
            }
        }
    }
    const inputFrom = document.getElementById("input-from");
    const inputBase = document.getElementById("input-base");
    const url = new URL(window.location.href);
    const ptb = url.searchParams.get('base');
    const pn = url.searchParams.get('num');
    inputFrom.value = '315';
    inputBase.value = '27';
    if (ptb) {
        inputBase.value = ptb;
    }
    if (pn) {
        inputFrom.value = pn;
    }
    let app = new App(inputFrom, inputBase);
    const test = document.getElementById('base-wrapper');
    test.appendChild(app.baseTo.blockContainer);
    test.appendChild(app.baseFrom.blockContainer);
});
//# sourceMappingURL=app.js.map