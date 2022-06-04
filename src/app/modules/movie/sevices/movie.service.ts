import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "src/app/constans";

@Injectable({
  providedIn: "root"
})

export class MovieService {

  constructor(private httpClient: HttpClient) {

  }

  getMovies(page: number): Observable<any> {
    return this.httpClient.get<any>(urls.movie + "&&page=" + page);
  }

  getMovieById(id: number): Observable<any> {
    return this.httpClient.get<any>(urls.video+ `/${id}`+`?api_key=0e17bf058d06dbd99f156ed017f543b4` );
  }

  getCreditsById(id: number): Observable<any> {
    return this.httpClient.get<any>(urls.video+ `/${id}/credits`+`?api_key=0e17bf058d06dbd99f156ed017f543b4` );
  }

}
