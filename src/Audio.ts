export class Audio {
    private _name: string;
    private _length: number;

    constructor(name: string, length: number) {
        this._name = name;
        this._length = length;
    }

    get name() {
        return this._name;
    }
    
    set name(name: string) {
        this._name = name;
    }

    get length() {
        return this._length;
    }

    set length(lenagth: number) {
        this._length = this.length;
    }

    play = () => {
        // play it
        console.log("play")
    }
}