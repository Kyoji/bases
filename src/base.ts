import Block from './block';
import bmap from './baseMap';

export default class Base {
    base: number;
    blocks: Block[] = [];
    bytes: number;
    places: number = 0;
    value: string;

    constructor(base: number, bytes: number) {
        this.base = base;
        this.bytes = bytes;
        this.blocksInit();
    }

    blocksInit() {
        this.blocks = [];
        let i = 0;
        for(i; i < this.bytes; i++) {
            let multiplier = Math.pow(this.base, i);
            let block = new Block(multiplier);
            this.blocks.push(block);
        }
    }

    insert(number: string) {
        if( number.length > this.bytes) {
            alert("Number too long!");
            return;
        }
        this.value = number;
        let i = 0
        let offset = number.length - 1;
        for(i; i < number.length; i++) {
            this.blocks[i].contains = +number[offset - i];
            this.places++;
        }
    }

    reset() {
        this.blocksInit();
        this.places = 0;
    }

    convert(baseFrom: Base) {
        this.reset();
        let offset = this.bytes - 1;
        let decValue = +baseFrom.value;
        for(offset; offset >= 0; offset--) {
            while (decValue >= this.blocks[offset].multiplier) {
                this.blocks[offset].contains++;
                decValue -= this.blocks[offset].multiplier;
            }
            this.places++;
        }
        if( this.blocks[this.places - 1].contains > this.base ) {
            console.log('Result greater than '+(this.bytes * 4)+'-bit!')
        }
    }
}