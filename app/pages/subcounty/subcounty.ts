import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocationService } from '../../providers/location/location.service';
import { Zone } from '../zone/zone';

let _ = require('lodash');
/*
  Generated class for the SubcountyPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/subcounty/subcounty.html',
})
export class Subcounty {
	
  public countyId;
  public locationList = [];
  private path;
  public keyArray;

  /////////////////////
  constructor(private locationService: LocationService, private nav: NavController, private navParams: NavParams) {
    this.locationService = locationService;

	  this.countyId = navParams.get('item');

	  this.init();
  }

  //initialize data
  init(){

    this.locationList = this.locationService.getLocations()
      .then((result) => {
        
        this.locationList = _.get(result.locations, this.countyId);
        //set array keys
        this.keyArray = Object.keys(this.locationList['children']);
        
        console.log('Subcounty View Loaded',this.locationList);

      }).catch((error) => {
        console.log(error);
    });
  }
  itemTapped(event, item) {
    this.nav.push(Zone, {
      item: item
    });
  }
}
