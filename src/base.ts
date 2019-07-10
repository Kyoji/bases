import Block from './block';
import baseCharacterMap from './baseCharacterMap';
import baseStringMap from './baseStringMap';
import stringToArray from './stringToArray';

export default class Base {
    base: number;
    blocks: Block[] = [];
    bytes: number;
    places: number = 0;
    zeroes: number = this.bytes;
    value: string;
    public blockContainer: HTMLDivElement;

    constructor(base: number, bytes: number, id: string) {
        this.base = base;
        this.bytes = bytes;
        this.blocksInit();
        this.createHTML(id);
    }

    blocksInit() {
        let i = 0;
        for(i; i < this.bytes; i++) {
            let multiplier = Math.pow(this.base, i);
            let block = new Block(multiplier);
            this.blocks.push(block);
        }
    }

    blocksReset() {
        let i =0;
        for(i; i < this.bytes; i++) {
            let multiplier = Math.pow(this.base, i);
            this.blocks[i].multiplier = multiplier;
            this.blocks[i].update('0', true);
        }
    }

    insert(number: string) {
        if( number.length > this.bytes) {
            alert("Number too long!");
            return;
        }
        this.places = 0;
        this.zeroes = 0;
        this.value = number;
        let i = 0
        let offset = this.bytes - number.length;
        for(i; i < offset; i++) {
            this.blocks[i].update('0', true);
        }
        for(i; i < this.bytes; i++) {
            this.blocks[i].update(number[i - offset], false);
            this.places++;
        }
        this.zeroes = this.bytes - this.places;
    }

    reset() {
        this.blocksReset();
        this.places = 0;
        this.zeroes = 0;
    }

    convert(baseFrom: Base) {
        this.reset();
        let decValue = +baseFrom.value;
        let convertedString = '';
        let sigFig: boolean = false;
        let i = this.bytes - 1;
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
        if( this.blocks[this.places - 1].contains > this.base ) {
            console.log('Result greater than '+(this.bytes * 4)+'-bit!')
        }
    }

    createHTML(id: string): HTMLDivElement {
        this.blockContainer = document.createElement('div') as HTMLDivElement;
        this.blockContainer.classList.add('base');
        this.blockContainer.id = id;
        for(let i = 0; i < this.bytes; i++) {
            this.blockContainer.append(this.blocks[i].blockContainer);
        }
        return this.blockContainer;
    }

}
