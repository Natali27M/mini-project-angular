import {Component, Input, OnInit} from "@angular/core";

import {IMovie, IMovieDetails} from "../../interfaces";
import {IGenre} from "../../../genre/interfaces";
import {GenreService} from "../../../genre/services";
import {ActivatedRoute, Router} from "@angular/router";
import {urls} from "../../../../constans";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})

export class MovieComponent implements OnInit {

  @Input()
  movie: IMovie;
  genres: IGenre[];
  movieDetails: IMovieDetails;
  movieVideoKey: string;
  video: string;

  constructor(
    private genreService: GenreService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient) {}

  ngOnInit(): void {
    // this.genreService.getGenres().subscribe(value => this.genres = value);
    this.httpClient.get<any>(urls.video + `/${this.movie.id}` + `/videos?api_key=0e17bf058d06dbd99f156ed017f543b4`)
      .subscribe(value=> this.movieVideoKey = value.results[0].key)
  }

  navigateMe(movie: IMovie) {
    this.router.navigate([movie.id],
      { relativeTo: this.activatedRoute, state: { data: movie, key: this.movieVideoKey}}
    ).then();

    this.httpClient.get<any>(urls.video + `/${movie.id}` + `/videos?api_key=0e17bf058d06dbd99f156ed017f543b4`)
    .subscribe(value=> this.movieVideoKey = value.results[0].key)
      // .subscribe(value=>{
      //   this.movieVideoKey = value.results[0].key;
      //   console.log(this.movieVideoKey, 'key')
      // })
  }

}
