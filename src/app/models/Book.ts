import {IBook} from "./IBook";

export class Book implements IBook {
    public id: number;
    public name: string;
    public genreId: number;
    public genre: object;

    constructor();
    constructor(id: number, name: string, genreId: number, genre: object);
    constructor(id?: number, name?: string, genreId?: number, genre?: object) {
        this.id = id;
        this.name = name;
        this.genreId = genreId;
        this.genre = genre;
    }
}
