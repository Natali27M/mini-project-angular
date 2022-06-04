import {HttpClient} from "@angular/common/http";
import {Component, OnInit} from "@angular/core";

import {MovieService} from "../../sevices";
import {IMovie} from "../../interfaces"
import {IGenre} from "../../../genre/interfaces";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]

})

export class MoviesComponent implements OnInit {
  movies: IMovie[];
  genres: IGenre[];
  p: number = 1;
  total: number = 0;

  constructor(private httpClient: HttpClient, private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.movieService.getMovies(this.p).subscribe(value => {
      this.movies = value.results;
      this.total = 3000;
      // this.total = value.total_pages;
    });
  }

  pageChangeEvent(event: number){
    this.p = event;
    console.log(this.p,'page')
    this.getAllMovies();
  }

}

