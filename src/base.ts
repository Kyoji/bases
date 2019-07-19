import Block from './block';
import baseCharacterMap from './baseCharacterMap';

export default class Base {
    base: number;
    blocks: Block[] = [];
    length: number;
    value: string;
    placesSig: number = 0;
    placesZero: number = this.length;
    public blockContainer: HTMLDivElement;

    constructor(base: number, bytes: number, id: string) {
        this.base = base;
        this.length = bytes;
        this.blocksInit();
        this.generateHTML(id);
    }

    blocksInit() {
        let i = 0;
        for(i; i < this.length; i++) {
            let multiplier = Math.pow(this.base, i);
            let block = new Block(multiplier, this.base, (this.length - 1) - i);
            this.blocks.push(block);
        }
    }

    blocksReset() {
        let i =0;
        for(i; i < this.length; i++) {
            let multiplier = Math.pow(this.base, i);
            this.blocks[i].multiplier = multiplier;
            this.blocks[i].update('0', true, this.base);
        }
    }

    insert(number: string) {
        if( number.length > this.length) {
            console.log("Number too long!");
            return;
        }
        this.placesSig = 0;
        this.placesZero = 0;
        this.value = number;
        let i = 0
        let offset = this.length - number.length;
        for(i; i < offset; i++) {
            this.blocks[i].update('0', true, this.base);
        }
        for(i; i < this.length; i++) {
            this.blocks[i].update(number[i - offset], false, this.base);
            this.placesSig++;
        }
        this.placesZero = this.length - this.placesSig;
    }

    reset() {
        this.blocksReset();
        this.placesSig = 0;
        this.placesZero = 0;
    }

    convert(baseFrom: Base) {
        this.reset();
        let decValue = +baseFrom.value;
        let convertedString = '';
        let sigFig: boolean = false;
        let i = this.length - 1;
        for(i; i >= 0; i--) {
            let blockValue = 0;
            while (decValue >= this.blocks[i].multiplier) {
                blockValue++;
                decValue -= this.blocks[i].multiplier;
            }
            switch (blockValue) {
                case 0:
                    if(sigFig)
                    convertedString += baseCharacterMap.get(blockValue);
                    break;
                default:
                    convertedString += baseCharacterMap.get(blockValue);
                    sigFig = true;
                    break;
            }
        }
        this.insert(convertedString);
        console.log(this.placesSig - 1);
        if( this.blocks[this.placesSig - 1].contains > this.base ) {
            console.log('Result greater than '+(this.length * 4)+'-bit!')
        }
    }

    generateHTML(id: string): HTMLDivElement {
        this.blockContainer = document.createElement('div') as HTMLDivElement;
        this.blockContainer.classList.add('base');
        this.blockContainer.id = id;
        for(let i = 0; i < this.length; i++) {
            this.blockContainer.append(this.blocks[i].blockContainer);
        }
        return this.blockContainer;
    }

}
