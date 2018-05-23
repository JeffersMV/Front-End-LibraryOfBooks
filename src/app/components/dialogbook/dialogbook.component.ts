import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Book} from "../../models/Book";

@Component({
    selector: 'app-dialogbook',
    templateUrl: './dialogbook.component.html',
    styleUrls: ['./dialogbook.component.css'],
})
export class DialogbookComponent implements OnInit {

    @Input() book: Book;
    @Input() displayDialog: boolean;

    @Output() deleteEvent = new EventEmitter<string>();
    @Output() updateEvent = new EventEmitter<string>();
    @Output() cancelEvent = new EventEmitter<string>();
    @Output() displayDialogChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

    delete() {
        this.deleteEvent.emit();
    }

    update() {
        this.updateEvent.emit();
    }

    cancel() {
        this.cancelEvent.emit();
    }

    onHideDialog() {
        this.displayDialogChange.emit(false);
    }
}
