export default class Block {
    public multiplier: number;
    public contains: number;
    public blockContainer: HTMLDivElement;
    private blockElement: HTMLDivElement;

    constructor(multiplier: number) {
        this.multiplier = multiplier;
        this.contains = 0;
        this.createHTML();
    }

    private createHTML() {
        this.blockContainer = document.createElement('div') as HTMLDivElement;
        this.blockElement =  document.createElement('div') as HTMLDivElement;
        this.blockContainer.classList.add('block-container');
        this.blockElement.classList.add('block');
        this.blockElement.classList.add('zero');
        this.blockElement.innerHTML = '0';
        this.blockContainer.append(this.blockElement);
    }

    public update(number: string) {
        this.contains = +number;
        if(number === '0'){ 
            this.isZero(); 
        } else { 
            this.isNotZero(); 
        }
        this.blockElement.innerHTML = number;
        // console.log(this.blockElement);
    }

    public isZero() {
        this.blockElement.classList.add('zero');
    }

    public isNotZero() {
        this.blockElement.classList.remove('zero');
    }

}