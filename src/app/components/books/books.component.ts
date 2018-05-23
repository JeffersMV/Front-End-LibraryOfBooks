import {Component, OnInit, Output} from '@angular/core';
import {DataProviderService} from "../../services/dataprovider.service";
import {IBook} from "../../models/IBook";
import {Book} from "../../models/Book";


@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {

    @Output() displayDialog: boolean;
    @Output() displayDialogAdd: boolean;

    book: Book = new Book();
    selectedBook: Book;
    newBook: boolean;
    books: Array<IBook>;

    constructor(private dataProviderService: DataProviderService) {
        this.dataProviderService.getBooks().subscribe(books => this.books = books);
    }

    ngOnInit() {
    }

    showDialogToAdd() {
        this.newBook = true;
        this.book = new Book();
        this.displayDialogAdd = true;
    }

    onRowSelect(event) {
        this.newBook = false;
        this.book = BooksComponent.cloneBook(event.data);
        this.displayDialog = true;
    }

    cancel() {
        if (this.newBook) {
            this.newBook = false;
            this.book = null;
            this.displayDialogAdd = false;
        }
        else {
            this.newBook = false;
            this.book = null;
            this.displayDialog = false;
        }
    }

    create() {
        let books = [...this.books];
        this.dataProviderService.addBook(this.book).subscribe(book => {
            this.book = book[0];
            books.push(this.book);
            this.books = books;
            this.book = null;
            this.displayDialogAdd = false;
        });
    }

    update() {
        let indexBooks = this.findSelectedBookIndex();
        const books = [...this.books];
        this.dataProviderService.updateBook(this.findBookId(), this.book).subscribe(book => {
            this.book = book[0];
            books[indexBooks] = this.book;
            this.books = books;
            this.book = null;
            this.displayDialog = false;
        })
    }

    delete() {
        let indexBooks = this.findSelectedBookIndex();
        let idBook = this.findBookId();
        this.dataProviderService.deleteBook(idBook).subscribe(() => {
            this.books = this.books.filter((IBook, id) => id != indexBooks);
            this.book = null;
            this.displayDialog = false;
        });
    }

    static cloneBook(b: Book): Book {
        let book = new Book();
        for (let prop in book) {
            book[prop] = b[prop];
        }
        return book;
    }

    findSelectedBookIndex(): number {
        return this.books.indexOf(this.selectedBook);
    }

    findBookId(): number {
        return this.selectedBook.id;
    }
}
