import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

import {GenreRoutingModule} from "./genre-routing.module";
import {GenresComponent} from "./components/genres/genres.component";
import {GenreComponent} from "./components/genre/genre.component";
import {GenreService} from "./services";


@NgModule({
  declarations: [
    GenresComponent,
    GenreComponent
  ],

  imports: [
    CommonModule,
    GenreRoutingModule,
    HttpClientModule
  ],

  providers: [
    GenreService
  ]
})

export class GenreModule {

}
