import baseStringMap from './baseStringMap';

export default class Block {
    public multiplier: number;
    public contains: number;
    public blockContainer: HTMLDivElement;
    private blockElement: HTMLDivElement;
    private bitContainer: HTMLDivElement;
    private bits: HTMLDivElement[] = [];

    constructor(multiplier: number) {
        this.multiplier = multiplier;
        this.contains = 0;
        this.createHTML();
    }

    private createHTML() {
        this.blockContainer = document.createElement('div') as HTMLDivElement;
        this.bitContainer = document.createElement('div') as HTMLDivElement;
        this.bitContainer.classList.add('bit-container');
        this.blockElement =  document.createElement('div') as HTMLDivElement;
        this.blockContainer.classList.add('block-container');
        this.blockElement.classList.add('block');
        this.blockElement.classList.add('zero');
        this.blockElement.innerHTML = '0';
        this.blockContainer.append(this.bitContainer);
        this.blockContainer.append(this.blockElement);
        // this.bits[0] = document.createElement('div') as HTMLDivElement;
        // this.bits[1] = document.createElement('div') as HTMLDivElement;
        // this.bits[0].classList.add('bit');
        // this.bits[1].classList.add('bit');
        // this.bitContainer.append(this.bits[0]);
        // this.bitContainer.append(this.bits[1]);
    }

    public update(number: string, isZero: boolean) {
        this.contains = baseStringMap.get(number);
        this.addZero(isZero);
        this.blockElement.innerHTML = number;
        this.syncBits();
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

    private syncBits() {
        this.bits.forEach((elem, i) => {
            this.bitContainer.removeChild(elem);
        })
        this.bits.length = 0;
        let i = 0;
        for(i; i < this.contains; i++) {
            this.bits[i] = document.createElement('div');
            this.bits[i].classList.add('bit');
            this.bitContainer.append(this.bits[i]);
        }
    }

}