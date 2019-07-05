import Base from './base';

class App {
    bytes: number = 8;
    public baseFrom: Base;
    public baseTo: Base;

    constructor() {
        let test = '100000';
        let base = 16;
        this.baseTo = new Base(base, this.bytes);
        this.baseFrom = new Base(10, this.bytes);
    }

    update() {
        this.baseTo.convert(this.baseFrom);
        const baseToBoxes: HTMLCollection = document.getElementById("baseto").getElementsByClassName("block");
        const baseFromBoxes: HTMLCollection = document.getElementById("basefrom").getElementsByClassName("block");
        const baseTo: string = app.baseTo.output();
        const baseFrom: string = app.baseFrom.output();
        let baseToZeroes = app.baseTo.zeroes;
        let baseFromZeroes = app.baseFrom.zeroes;

        for(let i = 0; i < app.bytes; i++) {
            baseToBoxes[i].classList.remove('zero');
            baseFromBoxes[i].classList.remove('zero');
            baseToBoxes[i].innerHTML = baseTo[i];
            baseFromBoxes[i].innerHTML = baseFrom[i]; 
            if(baseToZeroes !== 0) { 
                baseToBoxes[i].classList.add('zero'); 
                baseToZeroes--; 
            }
            if(baseFromZeroes !== 0) { 
                baseFromBoxes[i].classList.add('zero'); 
                baseFromZeroes--; 
            }
        }
    }

    watch(input: HTMLInputElement) {
        if(input.value !== '') {
            app.baseFrom.insert(input.value);
            app.update();
        } else {
            app.baseFrom.insert('0');
        }
        console.log(app.baseFrom.value);
    }
}

let app = new App();

const input = <HTMLInputElement>document.getElementById("input-from");
input.value = '1234';
app.watch(input);
input.addEventListener("keyup", function(e){
    app.watch(input);
});