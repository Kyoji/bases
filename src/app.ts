import Base from './base';

class App {
    bytes: number = 8;
    public baseFrom: Base;
    public baseTo: Base;

    constructor() {
        let test = '2810';
        let base = 16;
        this.baseTo = new Base(16, this.bytes);
        this.baseFrom = new Base(10, this.bytes);
        this.baseFrom.insert(test);
        this.baseTo.convert(this.baseFrom);
    }
}

let app = new App();

const baseToBoxes: HTMLCollection = document.getElementById("base-baseto").getElementsByClassName("block");
const baseFromBoxes: HTMLCollection = document.getElementById("base-basefrom").getElementsByClassName("block");
const baseTo: string = app.baseTo.print();
const baseFrom: string = app.baseFrom.print();

for(let i = 0; i < app.bytes; i++) {
    baseToBoxes[(app.bytes - 1) - i].innerHTML = baseTo[i];
    baseFromBoxes[(app.bytes - 1) - i].innerHTML = baseFrom[i];
}