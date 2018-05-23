import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Genre} from "../../models/Genre";

@Component({
    selector: 'app-dialoggenre',
    templateUrl: './dialoggenre.component.html',
    styleUrls: ['./dialoggenre.component.css']
})
export class DialoggenreComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    @Input() genre: Genre;
    @Input() displayDialog: boolean;

    @Output() deleteEvent = new EventEmitter<string>();
    @Output() updateEvent = new EventEmitter<string>();
    @Output() cancelEvent = new EventEmitter<string>();
    @Output() displayDialogChange: EventEmitter<boolean> = new EventEmitter<boolean>();

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
