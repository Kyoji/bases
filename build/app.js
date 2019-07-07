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
            let base = 16;
            this.baseTo = new base_1.default(base, this.bytes, 'baseto');
            this.baseFrom = new base_1.default(10, this.bytes, 'basefrom');
        }
        update(number) {
            // this.baseTo.convert(this.baseFrom);
            // const baseToBoxes: HTMLCollection = document.getElementById("baseto").getElementsByClassName("block");
            // const baseFromBoxes: HTMLCollection = document.getElementById("basefrom").getElementsByClassName("block");
            // const baseTo: string = app.baseTo.output();
            // const baseFrom: string = app.baseFrom.output();
            // let baseToZeroes = app.baseTo.zeroes;
            // let baseFromZeroes = app.baseFrom.zeroes;
            // for(let i = 0; i < app.bytes; i++) {
            //     baseToBoxes[i].classList.remove('zero');
            //     baseFromBoxes[i].classList.remove('zero');
            //     baseToBoxes[i].innerHTML = baseTo[i];
            //     baseFromBoxes[i].innerHTML = baseFrom[i]; 
            //     if(baseToZeroes !== 0) { 
            //         baseToBoxes[i].classList.add('zero'); 
            //         baseToZeroes--; 
            //     }
            //     if(baseFromZeroes !== 0) { 
            //         baseFromBoxes[i].classList.add('zero'); 
            //         baseFromZeroes--; 
            //     }
            // }
            this.baseFrom.insert(number);
            this.baseTo.convert(this.baseFrom);
            // console.log(this.baseTo.getHTML());
            // console.log(this.baseFrom.getHTML());
            // this.baseTo.updateBlocksHTML();
            // this.baseFrom.updateBlocksHTML();
        }
        watch(input) {
            if (input.value !== '') {
                app.update(input.value);
            }
            else {
                app.update('0');
            }
            console.log(app.baseFrom.value);
        }
    }
    let app = new App();
    const test = document.getElementById('base-wrapper');
    test.appendChild(app.baseTo.blockContainer);
    test.appendChild(app.baseFrom.blockContainer);
    const input = document.getElementById("input-from");
    input.value = '1234';
    app.watch(input);
    input.addEventListener("keyup", function (e) {
        app.watch(input);
    });
});
//# sourceMappingURL=app.js.map