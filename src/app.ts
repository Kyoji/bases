import Base from './base';

class App {
    bytes: number = 8;
    baseFrom: Base;
    baseTo: Base;

    constructor() {
        this.baseTo = new Base(16, this.bytes);
        this.baseFrom = new Base(10, this.bytes);
    }
}

let app = new App();