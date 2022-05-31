import { HttpClient } from '@angular/common/http';
import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IMovieDetails} from "../../interfaces";
import {urls} from "../../../../constans";
import {GenreService} from "../../../genre/services";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {

  movieDetails: IMovieDetails;
  video: string;
  movieVideoKey: string;
  // video= `https://www.youtube.com/watch?v=${this.movieVideoKey}`;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private genreService: GenreService) {
    this.activatedRoute.params.subscribe(value => {
      this.movieDetails = this.router.getCurrentNavigation()?.extras.state?.["data"] as IMovieDetails;
      this.movieVideoKey = this.router.getCurrentNavigation()?.extras.state?.["key"] as string;
      console.log(this.movieVideoKey,'key video');
    })
  }

  ngOnInit(): void {
    this.video= `https://www.youtube.com/watch?v=`+`${this.movieVideoKey}`;
  }

  // getVideo(id: number): void {
  //   this.httpClient.get<any>(urls.video + `/${id}` + `/videos?api_key=0e17bf058d06dbd99f156ed017f543b4`);
  // }

  // showVideo() {
  //   this.httpClient.get<any>(urls.video + `/${+this.movieDetails.id}` + `/videos?api_key=0e17bf058d06dbd99f156ed017f543b4`)
  //     .subscribe(value => this.movieVideoKey = value.results[0].key);
  // }
}

