import { Podcast } from "./Podcast";
import { Audio } from "./Audio";

export class Episode extends Audio {
    private _podcast: Podcast;

    constructor(name: string, length: number, podcast: Podcast) {
        super(name, length);
        this._podcast = podcast;
    }

    get podcast(): Podcast {
        return this._podcast;
    }

    set podcast(podcast: Podcast) {
        this._podcast = podcast;
    }

    play = () => {
        // check where it left off
        // play it
        console.log("Playing episode");
    }
}