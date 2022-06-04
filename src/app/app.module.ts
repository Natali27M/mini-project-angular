import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"

import {AppComponent} from "./app.component";
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from "./components/header/header.component";
import {PaginationService} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],

  providers: [
    PaginationService
  ],

  bootstrap: [AppComponent]
})

export class AppModule {

}
