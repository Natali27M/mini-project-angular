import {Component, OnInit} from "@angular/core";
import {IMovie, IRating} from "src/app/modules/movie/interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {GenreService} from "../../services";
import {IGenre} from "../../interfaces";
import {urls} from "../../../../constans";

@Component({
  selector: "app-movies-by-genre",
  templateUrl: "./movies-by-genre.component.html",
  styleUrls: ["./movies-by-genre.component.css"]
})

export class MoviesByGenreComponent implements OnInit {

  genres: IGenre[];
  movies: IMovie[];
  page: number;
  moviesByGenre: IMovie[];
  id: number;
  p: number = 2;
  total: number = 0;
  movieVideoKey: string;
  vote_average: number;
  ratings: IRating[] = [
    {
      value : 4,
      // value : number = this.vote_average,
      max: 10
    }
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private genreService: GenreService,
    private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.getAllMoviesByGenre();
  }

  getAllMoviesByGenre(): void{
    this.activatedRoute.params.subscribe(({id})=> {
    this.genreService.getMoviesByGenre(+id, this.p)
      .subscribe(value => {
        this.moviesByGenre = value.results;
        this.total = 3000;
      });
    })
  }

  navigateMe(movie: IMovie) {
    this.router.navigate([movie.id],
      { relativeTo: this.activatedRoute, state: { data: movie, key: this.movieVideoKey}}
    ).then();

    this.httpClient.get<any>(urls.video + `/${movie.id}` + `/videos?api_key=0e17bf058d06dbd99f156ed017f543b4`)
      .subscribe(value => this.movieVideoKey = value.results[0].key);
  }

  pageChangeEvent2(event: number): void{
    this.p = event;
    this.getAllMoviesByGenre();
  }

}
