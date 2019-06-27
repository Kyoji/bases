import Base from './base';

class App {
    bytes: number = 8;
    baseFrom: Base;
    baseTo: Base;

    constructor() {
        this.baseTo = new Base(16, this.bytes);
        this.baseFrom = new Base(10, this.bytes);
        this.baseFrom.insert('87392');
        this.baseTo.convert(this.baseFrom);
        this.baseTo.print();
    }
}

let app = new App();