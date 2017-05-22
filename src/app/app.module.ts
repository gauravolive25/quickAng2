import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppRouting } from './app.routing';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { PlaceComponent }  from './place.component';
import { PlaceService }          from './places.service';

@NgModule({
  imports:      [ BrowserModule, InMemoryWebApiModule.forRoot(InMemoryDataService), AppRouting, HttpModule,],
  declarations: [ AppComponent, PlaceComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ PlaceService ],

})
export class AppModule { }
