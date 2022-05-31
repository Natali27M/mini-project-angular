import {Component, OnInit} from "@angular/core";
import {IMovie} from "src/app/modules/movie/interfaces";
import {ActivatedRoute, Router} from "@angular/router";

import {GenreService} from "../../services";

@Component({
  selector: "app-movies-by-genre",
  templateUrl: "./movies-by-genre.component.html",
  styleUrls: ["./movies-by-genre.component.css"]
})

export class MoviesByGenreComponent implements OnInit {

  moviesByGenre: IMovie[];
  id: number;
  p: number = 2;
  total: number = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private genreService: GenreService) {

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

  pageChangeEvent2(event: number): void{
    this.p = event;
    this.getAllMoviesByGenre();
  }

}
