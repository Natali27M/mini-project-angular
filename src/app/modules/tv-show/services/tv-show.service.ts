import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {urls} from "../../../constans";

@Injectable({
  providedIn: 'root'
})

export class TvShowService {

  constructor(private httpClient: HttpClient) {

  }

  getTvShows(page: number): Observable<any> {
    return this.httpClient.get<any>(urls.tv  + "&&page=" + page);
  }

  getCreditsById(id: number): Observable<any> {
    return this.httpClient.get<any>(urls.videoTvShow+ `/${id}/credits`+`?api_key=0e17bf058d06dbd99f156ed017f543b4`);
  }

}
