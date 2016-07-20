import { Injectable } from '@angular/core';
import { Data } from '../../providers/data/data';

/*
  Generated class for the LocationService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
let _ = require('lodash');

@Injectable()
export class LocationService {
  
  private locationList;
  private path;
  /////////////////////////////
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

  getLocation(doc, path){
    //get document from path
    return _.get(doc, path);
  }

  getCounty(doc,key){
    this.path = 'locations.'+key;
    return _.get(doc,this.path);
  }

  setLocation(doc){
    return this.dataService.addDocument(doc);
  }

  moveLocation(from, to){

  }

  deleteLocation(doc){

  }
}