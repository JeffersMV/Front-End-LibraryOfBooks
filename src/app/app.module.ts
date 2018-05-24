import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {
    ButtonModule,
    DataTableModule,
    DialogModule,
    InputTextModule,
    SharedModule,
    AccordionModule,
    GrowlModule
} from "primeng/primeng";
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BooksComponent} from './components/books/books.component';
import {GenresComponent} from './components/genres/genres.component';
import {MenuComponent} from './components/menu/menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {DialoggenreComponent} from './components/dialoggenre/dialoggenre.component';
import {DialogbookComponent} from "./components/dialogbook/dialogbook.component";
import {DataProviderService} from "./services/dataprovider.service";
import {HttpClientModule} from "@angular/common/http";
import {DialogaddbookComponent} from './components/dialogaddbook/dialogaddbook.component';
import {DialogaddgenreComponent} from './components/dialogaddgenre/dialogaddgenre.component';

@NgModule({
    declarations: [
        AppComponent,
        BooksComponent,
        GenresComponent,
        MenuComponent,
        DialogbookComponent,
        DialoggenreComponent,
        DialogaddbookComponent,
        DialogaddgenreComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        GrowlModule,
        InputTextModule,
        AccordionModule,
        SharedModule,
        DataTableModule,
        ButtonModule,
        DialogModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [DataProviderService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
