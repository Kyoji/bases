import Base from './base';

class App {
    bytes: number = 8;
    public baseFrom: Base;
    public baseTo: Base;

    constructor(base: string, value: string) {
        this.baseTo = new Base(+base, this.bytes, 'baseto');
        this.baseFrom = new Base(10, this.bytes, 'basefrom');
    }

    update(number: string, base: string) {
        console.log(base);
        this.baseFrom.insert(number);
        this.baseTo.base = +base;
        this.baseTo.reset();
        this.baseTo.convert(this.baseFrom);
    }

    watch(input: HTMLInputElement, base: string) {
        if(input.value !== '') {
            app.update(input.value, base);
        } else {
            app.update('0', base);
        }
    }
}



const inputFrom = document.getElementById("input-from") as HTMLInputElement;
const inputBase = document.getElementById("input-base") as HTMLInputElement;
inputFrom.value = '110';
inputBase.value = '16';

let app = new App(inputBase.value, inputFrom.value);

const test = document.getElementById('base-wrapper');
test.appendChild(app.baseTo.blockContainer);
test.appendChild(app.baseFrom.blockContainer);

app.watch(inputFrom, inputBase.value);
inputFrom.addEventListener("keyup", function(e){
    app.watch(inputFrom, inputBase.value);
});
inputBase.addEventListener("keyup", function(e){
    console.log(inputBase.value);
    app.watch(inputFrom, inputBase.value);
});