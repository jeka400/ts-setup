import { Album } from "./Album";
import { Audio } from "./Audio";

export class Track extends Audio {
    private _album: Album;

    constructor(name: string, length: number, album: Album) {
        super(name, length);
        this._album = album;
    }

    get album(): Album {
        return this._album;
    }

    set album(album: Album) {
        this._album = album;
    }
}


const albumRocks = new Album("Rocks");
const myTrack = new Track("Combination", 264, albumRocks);

myTrack.play();