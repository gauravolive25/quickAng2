import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let places = [
      {id: 11, name: 'Holland'},
      {id: 12, name: 'Spain'},
      {id: 13, name: 'Paris'},
      {id: 14, name: 'London'},
      {id: 15, name: 'Honolulu'},
      {id: 16, name: 'Miami'},
      {id: 17, name: 'Dubai'},
      {id: 18, name: 'Bali'},
      {id: 19, name: 'Pattaya'},
      {id: 20, name: 'Singapore'}
    ];
    return {places};
  }
}
