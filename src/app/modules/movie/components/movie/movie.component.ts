import {Component, Input, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

import {IMovie, IRating} from "../../interfaces";
import {IGenre} from "../../../genre/interfaces";
import {GenreService} from "../../../genre/services";
import {urls} from "../../../../constans";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})

export class MovieComponent implements OnInit {

  @Input()
  movie: IMovie;
  genres: IGenre[];
  movieVideoKey: string;
  vote_average: number;
  ratings: IRating[] = [
    {
      value : 4,
      max: 10
    }
  ];

  constructor(
    private genreService: GenreService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<any>(urls.video + `/${this.movie.id}` + `/videos?api_key=0e17bf058d06dbd99f156ed017f543b4`)
      .subscribe(value=> this.movieVideoKey = value.results[0].key)
    this.vote_average = this.movie.vote_average;
  }

  navigateMe(movie: IMovie) {
    this.router.navigate([movie.id],
      { relativeTo: this.activatedRoute, state: { data: movie, key: this.movieVideoKey}}
    ).then();

    this.httpClient.get<any>(urls.video + `/${movie.id}` + `/videos?api_key=0e17bf058d06dbd99f156ed017f543b4`)
    .subscribe(value=> this.movieVideoKey = value.results[0].key)
  }

}
