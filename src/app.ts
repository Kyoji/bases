import Base from './base';

class App {
    bytes: number = 8;
    public baseFrom: Base;
    public baseTo: Base;
    private inputFrom: HTMLInputElement;
    private inputBase: HTMLInputElement;

    constructor(
        inputFrom: HTMLInputElement,
        inputBase: HTMLInputElement 
        ) {
        this.baseTo = new Base(+inputBase.value, this.bytes, 'baseto');
        this.baseFrom = new Base(10, this.bytes, 'basefrom');
        this.inputFrom = inputFrom;
        this.inputBase = inputBase;
        this.update(this.inputFrom.value, this.inputBase.value);
        this.listen();
    }

    update(number: string, base: string) {
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
        })
    }

    cleanUpdateInput(input: string) {
        switch (input) {
            case '0':
            case '1':
            case '':
                // this.update('0', '10');
                return
                break;
            default:
                this.update(this.inputFrom.value, this.inputBase.value);
                break;
        }
    }
}



const inputFrom = document.getElementById("input-from") as HTMLInputElement;
const inputBase = document.getElementById("input-base") as HTMLInputElement;
const url = new URL(window.location.href);
const ptb = url.searchParams.get('base');
const pn = url.searchParams.get('num');
inputFrom.value = '315';
inputBase.value = '27';
if(ptb) {
    inputBase.value = ptb;
}
if(pn) {
    inputFrom.value = pn;
}


let app = new App(inputFrom, inputBase);

const test = document.getElementById('base-wrapper');
test.appendChild(app.baseTo.blockContainer);
test.appendChild(app.baseFrom.blockContainer);