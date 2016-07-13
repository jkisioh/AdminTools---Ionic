import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocationService } from '../../providers/location/location.service';

@Component({
  templateUrl: 'build/pages/county/county.html'
})
export class County {

  public locationList = {};

  constructor(private locationService: LocationService, private nav: NavController) {
  
  }

  ionViewLoaded(){
    //check
    this.locationList = this.locationService.getLocations();

    console.log('Location Page Loaded', this.locationList);
  }

}
