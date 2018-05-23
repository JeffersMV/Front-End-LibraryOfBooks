import {IGenre} from "./IGenre";

export class Genre implements IGenre {
    public id: number;
    public name: string;
    public books: string[];

    constructor();
    constructor(id: number, name: string, books: string[]);
    constructor(id?: number, name?: string, books?: string[]) {
        this.id = id;
        this.name = name;
        this.books = books;
    }
}
