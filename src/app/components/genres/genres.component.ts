import {Component, OnInit, Output} from '@angular/core';
import {IGenre} from "../../models/IGenre";
import {Genre} from "../../models/Genre";
import {DataProviderService} from "../../services/dataprovider.service";

@Component({
    selector: 'app-genres',
    templateUrl: './genres.component.html',
    styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

    @Output() ms: string;
    @Output() displayDialog: boolean;
    @Output() displayDialogAdd: boolean;

    genre: Genre = new Genre();
    selectedGenre: Genre;
    newGenre: boolean;
    genres: Array<IGenre>;

    constructor(private dataProviderService: DataProviderService) {
    }

    ngOnInit() {
        this.dataProviderService.getGenres().subscribe(genres => this.genres = genres);
    }

    showDialogToAdd() {
        this.newGenre = true;
        this.genre = new Genre();
        this.displayDialogAdd = true;
    }

    onRowSelect(event) {
        this.newGenre = false;
        this.genre = GenresComponent.cloneGenre(event.data);
        this.displayDialog = true;
    }

    cancel() {
        if (this.newGenre) {
            this.newGenre = false;
            this.genre = null;
            this.displayDialogAdd = false;
        }
        else {
            this.newGenre = false;
            this.newGenre = null;
            this.displayDialog = false;
        }
    }

    create() {
        let genres = [...this.genres];
        this.dataProviderService.addGenre(this.genre).subscribe(genre => {
            this.genre = genre;
            genres.push(this.genre);
            this.genres = genres;
            this.genre = null;
            this.displayDialogAdd = false;
        });
    }

    update() {
        let indexGenres = this.findSelectedGenreIndex();
        const genres = [...this.genres];
        this.dataProviderService.updateGenre(this.findGenreId(), this.genre).subscribe(genre => {
            this.genre = genre[0];
            genres[indexGenres] = this.genre;
            this.genres = genres;
            this.genre = null;
            this.displayDialog = false;
        })
    }

    delete() {
        let indexGenres = this.findSelectedGenreIndex();
        let idGenre = this.findGenreId();
        this.dataProviderService.deleteGenre(idGenre).subscribe(() => {
            this.genres = this.genres.filter((IGenre, id) => id != indexGenres);
            this.genre = null;
            this.displayDialog = false;
        });
    }

    static cloneGenre(c: Genre): Genre {
        let genre = new Genre();
        for (let prop in c) {
            genre[prop] = c[prop];
        }
        return genre;
    }

    findSelectedGenreIndex(): number {
        return this.genres.indexOf(this.selectedGenre);
    }

    findGenreId(): number {
        return this.selectedGenre.id;
    }
}
