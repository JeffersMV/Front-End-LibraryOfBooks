import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../models/Book";

@Component({
    selector: 'app-dialogaddbook',
    templateUrl: './dialogaddbook.component.html',
    styleUrls: ['./dialogaddbook.component.css']
})
export class DialogaddbookComponent implements OnInit {

    @Input() book: Book;
    @Input() displayDialogAdd: boolean;

    @Output() cancelEvent = new EventEmitter<string>();
    @Output() createEvent = new EventEmitter<string>();
    @Output() displayDialogAddChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

    cancel() {
        this.cancelEvent.emit();
    }

    create() {
        this.createEvent.emit();
    }

    onHideDialog() {
        this.displayDialogAddChange.emit(false);
    }
}
