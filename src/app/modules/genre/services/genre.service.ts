import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "src/app/constans";

@Injectable({
  providedIn: "root"
})

export class GenreService {

  constructor(private httpClient: HttpClient) {

  }

  getGenres(): Observable<any> {
    return this.httpClient.get<any>(urls.genre)
  }

  getMoviesByGenre(id: number, page:number): Observable<any> {
    return this.httpClient.get<any>(urls.movie + `&with_genres=${id}`+ `&&page=${page}`)
  }

}
