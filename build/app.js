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
        constructor() {
            this.bytes = 8;
            let test = '100000';
            let base = 16;
            this.baseTo = new base_1.default(base, this.bytes);
            this.baseFrom = new base_1.default(10, this.bytes);
        }
        update() {
            this.baseTo.convert(this.baseFrom);
            const baseToBoxes = document.getElementById("baseto").getElementsByClassName("block");
            const baseFromBoxes = document.getElementById("basefrom").getElementsByClassName("block");
            const baseTo = app.baseTo.output();
            const baseFrom = app.baseFrom.output();
            let baseToZeroes = app.baseTo.zeroes;
            let baseFromZeroes = app.baseFrom.zeroes;
            for (let i = 0; i < app.bytes; i++) {
                baseToBoxes[i].classList.remove('zero');
                baseFromBoxes[i].classList.remove('zero');
                baseToBoxes[i].innerHTML = baseTo[i];
                baseFromBoxes[i].innerHTML = baseFrom[i];
                if (baseToZeroes !== 0) {
                    baseToBoxes[i].classList.add('zero');
                    baseToZeroes--;
                }
                if (baseFromZeroes !== 0) {
                    baseFromBoxes[i].classList.add('zero');
                    baseFromZeroes--;
                }
            }
        }
        watch(input) {
            if (input.value !== '') {
                app.baseFrom.insert(input.value);
                app.update();
            }
            else {
                app.baseFrom.insert('0');
            }
            console.log(app.baseFrom.value);
        }
    }
    let app = new App();
    const input = document.getElementById("input-from");
    input.value = '1234';
    app.watch(input);
    input.addEventListener("keyup", function (e) {
        app.watch(input);
    });
});
//# sourceMappingURL=app.js.map