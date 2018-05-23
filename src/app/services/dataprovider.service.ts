import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Genre} from "../models/Genre";
import {Book} from "../models/Book";


@Injectable()
export class DataProviderService {

    private urlBooks = 'http://127.0.0.1:5000/books/';
    private urlGenres = 'http://localhost:5000/genres/';

    constructor(private http: HttpClient) {
    }

    getBooks(): Observable<Book[]> {
        return this.http.get<any>(this.urlBooks)
    }

    public getBook(id: number): Observable<Book> {
        return this.http.get<any>(this.urlBooks + id);
    }

    public addBook(book: Book): Observable<Book> {
        return this.http.post<Book>(this.urlBooks, book);
    }

    public deleteBook(id: number) {
        // const urlParams = new HttpParams().set("id", id.toString());
        return this.http.delete(this.urlBooks + id);
    }

    public updateBook(id: number, book: Book): Observable<Book> {
        return this.http.put<any>(this.urlBooks + id, book);
    }

    public getGenres(): Observable<Genre[]> {
        return this.http.get<any>(this.urlGenres)
    }

    public getGenre(id: number): Observable<Genre> {
        return this.http.get<Genre>(this.urlGenres + id);
    }

    public addGenre(genre: Genre): Observable<Genre> {
        console.log(genre);
        return this.http.post<Genre>(this.urlGenres, genre);
    }

    public deleteGenre(id: number) {
        return this.http.delete(this.urlGenres + id);
    }

    public updateGenre(id: number, genre: Genre): Observable<Genre> {
        return this.http.put<any>(this.urlGenres + id, genre);
    }


}
