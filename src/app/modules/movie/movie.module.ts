import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

import {MovieRoutingModule} from "./movie-routing.module";
import {MovieService} from "./sevices";
import {MoviesComponent} from "./components/movies/movies.component";
import {MovieComponent} from "./components/movie/movie.component";


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent
  ],

  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule
  ],

  providers: [
    MovieService
  ]
})

export class MovieModule {

}
