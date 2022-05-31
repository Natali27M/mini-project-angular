import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

import {IGenre} from "../../interfaces";
import {GenreService} from "../../services";
import {MovieService} from "src/app/modules/movie/sevices";
import {IMovie} from "src/app/modules/movie/interfaces";

@Component({
  selector: "app-genre",
  templateUrl: "./genre.component.html",
  styleUrls: ["./genre.component.css"]
})

export class GenreComponent implements OnInit {

  @Input()
  genre: IGenre;
  page: number;

  constructor(private genreService: GenreService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

  }

  navigateMe(genre: IGenre) {
    this.router.navigate([genre.id], { relativeTo: this.activatedRoute,state: { data: genre.id } }).then();

  }

}
