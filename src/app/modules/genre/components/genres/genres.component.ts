import {Component, OnInit} from "@angular/core";

import {GenreService} from "../../services";
import {IGenre} from "../../interfaces";
import {MovieService} from "../../../movie/sevices";
import {IMovie} from "../../../movie/interfaces";
import {Observable} from "rxjs";
import {urls} from "../../../../constans";

@Component({
  selector: "app-genres",
  templateUrl: "./genres.component.html",
  styleUrls: ["./genres.component.css"]
})

export class GenresComponent implements OnInit {

  genres: IGenre[];
  movies: IMovie[];
  page: number;

  constructor(private genreService: GenreService, private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(value => this.genres = value.genres);
    this.movieService.getMovies(this.page).subscribe(value => this.movies = value.results);
  }

}
