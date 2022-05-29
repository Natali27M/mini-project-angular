import {HttpClient} from "@angular/common/http";
import {Component, OnInit} from "@angular/core";

import {MovieService} from "../../sevices";
import {IMovie} from "../../interfaces"

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];

  constructor(private httpClient: HttpClient, private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(value =>  this.movies = value.results);
  }

}
