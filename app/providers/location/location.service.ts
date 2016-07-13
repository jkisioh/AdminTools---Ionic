import { Injectable } from '@angular/core';
import { Data } from '../../providers/data/data';

/*
  Generated class for the LocationService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocationService {
  
  private locationList;

  constructor(private dataService: Data){
    this.dataService = dataService;

    //this.init();
  }

  /*init(){
    this.locationList = this.dataService.getDocument('location-list')
      .then((result) => {
        //return
        this.locationList = result;
        console.log('Getting locations..', this.locationList);
        return result;
      
      }).catch((error) => {
        //logger
        console.log(error);
        return {};
    }); 
  }*/

  getLocations(){
  	//load location list 
    return this.dataService.getDocument('location-list');   
  }
}