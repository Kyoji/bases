import Base from './base';

class App {
    bytes: number = 8;
    baseFrom: Base;
    baseTo: Base;

    constructor() {
        let test = '87392';
        let base = 16;
        this.baseTo = new Base(16, this.bytes);
        this.baseFrom = new Base(10, this.bytes);
        this.baseFrom.insert(test);
        this.baseTo.convert(this.baseFrom);
        console.log(test+' in base '+base+' is:');
        this.baseTo.print();
    }
}

let app = new App();