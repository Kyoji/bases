import baseStringMap from './baseStringMap';

export default class Block {
    public multiplier: number;
    public contains: number;
    public blockContainer: HTMLDivElement;
    private blockElement: HTMLDivElement;
    private bitContainer: HTMLDivElement;
    private bits: HTMLDivElement[] = [];
    private valueContainer: HTMLDivElement;
    private baseLabel: HTMLDivElement;
    private powerLabel: HTMLDivElement;
    private base: string = '10';
    private power: string = '0';

    constructor(multiplier: number, base: number, power: number) {
        this.multiplier = multiplier;
        this.contains = 0;
        this.base = base.toString();
        this.power = power.toString();
        this.createHTML();
    }

    private createHTML() {
        this.blockContainer = document.createElement('div') as HTMLDivElement;
        this.bitContainer = document.createElement('div') as HTMLDivElement;
        this.bitContainer.classList.add('bit-container');
        this.blockElement =  document.createElement('div') as HTMLDivElement;
        this.valueContainer = document.createElement('div') as HTMLDivElement;
        this.valueContainer.classList.add('value-label');
        this.baseLabel = document.createElement('div') as HTMLDivElement;
        this.powerLabel = document.createElement('div') as HTMLDivElement;
        this.baseLabel.classList.add('base-label');
        this.powerLabel.classList.add('power-label');
        this.baseLabel.innerHTML = this.base;
        this.powerLabel.innerHTML = this.power;
        this.blockContainer.classList.add('block-container');
        this.blockElement.classList.add('block');
        this.blockElement.classList.add('zero');
        this.blockElement.innerHTML = '0';
        this.blockContainer.append(this.bitContainer);
        this.blockContainer.append(this.blockElement);
        this.valueContainer.append(this.baseLabel, this.powerLabel);
        this.blockContainer.append(this.valueContainer);
    }

    public update(number: string, isZero: boolean, base: number) {
        this.base = base.toString();
        this.baseLabel.innerHTML = this.base;
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