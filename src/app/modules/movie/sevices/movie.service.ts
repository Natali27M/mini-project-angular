import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "src/app/constans";

@Injectable({
  providedIn: "root"
})

export class MovieService {

  constructor(private httpClient: HttpClient) {

  }

  getMovies(): Observable<any> {
    return this.httpClient.get<any>(urls.movie)
  }

}
