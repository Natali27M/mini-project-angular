import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ITvShow} from "../interfaces";

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})

export class TvShowComponent implements OnInit {

  @Input()
  tvShow: ITvShow;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

  }

  navigateMe(tvShow: ITvShow) {
    this.router.navigate([tvShow.id],
      { relativeTo: this.activatedRoute, state: { data: tvShow}}
    ).then();
  }

}
