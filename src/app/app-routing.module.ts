import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";

const routes: Routes = [
  {path: "", component: MainLayoutComponent,
    children: [
      { path: "movies", loadChildren: () => import("./modules/movie/movie.module").then(m => m.MovieModule) },
      { path: "genres", loadChildren: () => import("./modules/genre/genre.module").then(m => m.GenreModule) }
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
