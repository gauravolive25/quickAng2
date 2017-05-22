import { Component, OnInit } from '@angular/core';

import { Place }        from './place';
import { PlaceService } from './places.service';

@Component({
  selector: 'my-app',
  templateUrl: './place.component.html',
  styleUrls: [ './place.component.css' ]
})
export class PlaceComponent implements OnInit {
  places: Place[] = [];

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.placeService.getPlaces()
      .then(places => this.places = places.slice(1, 5));
  }
}
