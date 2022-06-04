import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {IMovie, IMovieDetails,ICast} from "../../interfaces";
import {GenreService} from "../../../genre/services";
import {MovieService} from "../../sevices";
import {IGenre} from "../../../genre/interfaces";
import {urls} from "../../../../constans";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})

export class MovieDetailsComponent implements OnInit {

  movieDetails: IMovieDetails;
  movieVideoKey: string;
  page: number;
  genres: IGenre[];
  genre: IGenre;
  movies: IMovie[];
  casts: ICast[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private genreService: GenreService,
              private movieService: MovieService, private httpClient: HttpClient) {
    this.activatedRoute.params.subscribe(value => {
      this.movieDetails = this.router.getCurrentNavigation()?.extras.state?.["data"] as IMovieDetails;
      this.movieVideoKey = this.router.getCurrentNavigation()?.extras.state?.["key"] as string ;
      console.log(value);

      this.httpClient.get<any>(urls.video + `/${this.movieDetails.id}` + `/videos?api_key=0e17bf058d06dbd99f156ed017f543b4`)
        .subscribe(value=> this.movieVideoKey = value.results[0].key)
    })
  }

  ngOnInit(): void {
    this.getMovieById();
    this.getCreditsById();
  }

  getMovieById(): void {
    this.activatedRoute.params.subscribe(({id})=> {
      this.movieService.getMovieById(+id)
        .subscribe(value => {
          this.genres = value.genres;
        });
    })
  }

  getCreditsById():void {
    this.activatedRoute.params.subscribe(({id})=> {
      this.movieService.getCreditsById(+id)
        .subscribe(value => {
          this.casts = value.cast;
          console.log(value.cast,'credits');
        });
    })
  }

}

