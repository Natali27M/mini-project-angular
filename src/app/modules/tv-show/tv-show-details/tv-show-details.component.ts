import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {ITvShow} from "../interfaces";
import {urls} from "../../../constans";
import {TvShowService} from "../services";
import {ICast} from "../../movie/interfaces";

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})

export class TvShowDetailsComponent implements OnInit {

  tvShowDetails: ITvShow;
  tvShowVideoKey: string;
  casts: ICast[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpClient: HttpClient,
              private tvShowService: TvShowService) {
    this.activatedRoute.params.subscribe(value => {
      this.tvShowDetails = this.router.getCurrentNavigation()?.extras.state?.["data"] as ITvShow;
      console.log(value);

      this.httpClient.get<any>(urls.videoTvShow + `/${this.tvShowDetails.id}` + `/videos?api_key=0e17bf058d06dbd99f156ed017f543b4`)
        .subscribe(value=> this.tvShowVideoKey = value.results[0].key)
    })
  }

  ngOnInit(): void {
    this.getCreditsById();
  }

  getCreditsById():void {
    this.activatedRoute.params.subscribe(({id})=> {
      this.tvShowService.getCreditsById(+id)
        .subscribe(value => {
          this.casts = value.cast;
          console.log(value.cast,'credits');
        });
    })
  }

}
