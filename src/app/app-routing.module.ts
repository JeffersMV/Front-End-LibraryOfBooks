import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BooksComponent} from "./components/books/books.component";
import {GenresComponent} from "./components/genres/genres.component";


const routes: Routes = [
    {path: '', redirectTo: '/books', pathMatch: 'full'},
    {path: 'books', component: BooksComponent},
    {path: 'genres', component: GenresComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
