import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgFor } from '@angular/common'
import { LocationService } from '../../providers/location/location.service';
import { DataPipe } from '../../pipes/data.pipe'

@Component({
  templateUrl: 'build/pages/county/county.html',
   pipes: [DataPipe],
   directives: [NgFor]
})
export class County {

  public locationList = {};

  ////////////
  constructor(private locationService: LocationService, private nav: NavController) {
  	this.locationService = locationService;

    this.init();
  }

  //initialize data
  init(){

    this.locationList = this.locationService.getLocations()
      .then((result) => {
        this.locationList = result.locations;
        console.log('View Loaded',this.locationList);

      }).catch((error) => {
        console.log(error);
    });
  }
  /*onPageWillEnter(){
  	//load data from service before
  	
  }*/
}
