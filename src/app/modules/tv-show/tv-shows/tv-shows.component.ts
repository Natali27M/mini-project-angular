import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {ITvShow} from "../interfaces";
import {TvShowService} from "../services";

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  tvShows: ITvShow[];
  p: number = 1;
  total: number = 0;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient,
              private tvShowService: TvShowService) {
  }

  ngOnInit(): void {
    this.getAllTvShows();
  }

  getAllTvShows() {
    this.tvShowService.getTvShows(this.p).subscribe(value => {
      this.tvShows = value.results;
      this.total = 3000;
      // this.total = value.total_pages;
    });
  }

  pageChangeEvent(event: number){
    this.p = event;
    this.getAllTvShows();
  }

}
