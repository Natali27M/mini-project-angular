import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {MovieDetailsComponent} from "./modules/movie/components/movie-details/movie-details.component";
import { MoviesByGenreComponent } from "./modules/genre/components/movies-by-genre/movies-by-genre.component";

const routes: Routes = [
  {path: "", component: MainLayoutComponent,
    children: [
      {path: "movies", loadChildren: () => import("./modules/movie/movie.module").then(m => m.MovieModule)},
      {path: "movies/:id", component: MovieDetailsComponent},
      {path: "genres", loadChildren: () => import("./modules/genre/genre.module").then(m => m.GenreModule)},
      {path: "genres/:id", component: MoviesByGenreComponent}
    ]
  }
]

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {

}
