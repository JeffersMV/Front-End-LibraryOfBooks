import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Genre} from "../../models/Genre";

@Component({
    selector: 'app-dialogaddgenre',
    templateUrl: './dialogaddgenre.component.html',
    styleUrls: ['./dialogaddgenre.component.css']
})
export class DialogaddgenreComponent implements OnInit {

    @Input() genre: Genre;
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
