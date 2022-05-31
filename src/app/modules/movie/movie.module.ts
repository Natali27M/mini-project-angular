import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";

import {MovieRoutingModule} from "./movie-routing.module";
import {MovieService} from "./sevices";
import {MoviesComponent} from "./components/movies/movies.component";
import {MovieComponent} from "./components/movie/movie.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";

@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent
  ],

  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],

  providers: [
    MovieService
  ]
})

export class MovieModule {

}
