"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class App {
    constructor() {
        this.bytes = 8;
        this.baseTo = new base_1.default(16, this.bytes);
        this.baseFrom = new base_1.default(10, this.bytes);
        this.baseFrom.insert('1234');
        this.baseTo.convert(this.baseFrom);
    }
}
let app = new App();
//# sourceMappingURL=app.js.map