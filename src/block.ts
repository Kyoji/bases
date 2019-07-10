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

    public update(number: string, isZero: boolean) {
        this.contains = +number;
        this.addZero(isZero);
        this.blockElement.innerHTML = number;
    }

    public addZero(isZero: boolean) {
        switch (isZero) {
            case true:
                this.blockElement.classList.add('zero');
                break;
            case false:
                this.blockElement.classList.remove('zero');
                break;
            default:
                break;
        }
        
    }

}