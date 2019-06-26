import Block from './block';
import bmap from './baseMap';

export default class Base {
    base: number;
    blocks: Block[] = [];
    bytes: number;

    constructor(base: number, bytes: number) {
        this.base = base;
        this.bytes = bytes;
        this.createBlocks();
    }

    createBlocks() {
        let i = 0;
        for(i; i < this.bytes; i++) {
            let multiplier = Math.pow(this.base, i);
            let block = new Block(multiplier);
            this.blocks.push(block);
        }
    }

    convert(number: number) {
        
    }
}