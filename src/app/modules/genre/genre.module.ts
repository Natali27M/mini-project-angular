import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

import {GenreRoutingModule} from "./genre-routing.module";
import {GenresComponent} from "./components/genres/genres.component";
import {GenreComponent} from "./components/genre/genre.component";
import {GenreService} from "./services";
import { MoviesByGenreComponent } from './components/movies-by-genre/movies-by-genre.component';
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    GenresComponent,
    GenreComponent,
    MoviesByGenreComponent
  ],

  imports: [
    CommonModule,
    GenreRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],

  providers: [
    GenreService
  ]
})

export class GenreModule {

}
