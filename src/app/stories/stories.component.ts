// stories.component.ts

import { Component, OnInit } from '@angular/core';
import {HackernewsApiService} from "../hackernews-api.service";

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {
  items;

  constructor(private _hackNewsAPIService: HackernewsApiService) {
  }

  ngOnInit() {
    this._hackNewsAPIService.fetchStories()
      .subscribe(
        items => this.items = items,
        error => console.log('Error fetching stories')
      );
  }
}
