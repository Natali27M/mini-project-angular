import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";

import {TvShowRoutingModule} from "./tv-show-routing.module";
import {TvShowsComponent} from "./tv-shows/tv-shows.component";
import {TvShowComponent} from "./tv-show/tv-show.component";
import {TvShowDetailsComponent} from "./tv-show-details/tv-show-details.component";


@NgModule({
  declarations: [
    TvShowsComponent,
    TvShowComponent,
    TvShowDetailsComponent
  ],
    imports: [
        CommonModule,
        TvShowRoutingModule,
        NgxPaginationModule
    ]
})

export class TvShowModule {

}
