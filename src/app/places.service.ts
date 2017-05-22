import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Place } from './place';

@Injectable()
export class PlaceService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private placesUrl = 'api/places';  // URL to web api

  constructor(private http: Http) { }

  getPlaces(): Promise<Place[]> {
    return this.http.get(this.placesUrl)
               .toPromise()
               .then(response => response.json().data as Place[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}