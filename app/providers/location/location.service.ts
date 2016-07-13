import { Injectable } from '@angular/core';
import { Data } from '../../providers/data/data';

/*
  Generated class for the LocationService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocationService {
  
  public locationList;

  constructor(private dataService: Data){
  	this.dataService = dataService;
  }

  getLocations(){
  	this.locationList =this.dataService.getDocument('location-list');

  	return this.locationList;
  }
}