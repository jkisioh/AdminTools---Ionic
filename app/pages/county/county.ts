import { Component } from '@angular/core';
import { NavController, NavParams, Alert } from 'ionic-angular';
import { NgFor } from '@angular/common'
import { LocationService } from '../../providers/location/location.service';
import { DataPipe } from '../../pipes/data.pipe'
import { Subcounty } from '../subcounty/subcounty';

@Component({
  templateUrl: 'build/pages/county/county.html',
   pipes: [DataPipe],
   directives: [NgFor]
})
export class County {

  public locationList = [];
  public keyArray;
  selectedItem: any;

  ////////////
  constructor(private locationService: LocationService, private nav: NavController, navParams: NavParams) {
  	this.locationService = locationService;

    this.init();

    this.selectedItem = navParams.get('item');
  }

  //initialize data
  init(){

    this.locationList = this.locationService.getLocations()
      .then((result) => {
        
        this.locationList = result.locations;
        //set array keys
        this.keyArray = Object.keys(this.locationList);
        
        console.log('County View Loaded');

      }).catch((error) => {
        console.log(error);
    });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.nav.push(Subcounty, {
      item: item
    });
  }

  addNote(){
 
        let prompt = Alert.create({
            title: 'Add County',
            inputs: [{
                name: 'title',
                placeholder: 'County'
            },
            {
                name: 'quota',
                placeholder: 'Quota'
            }
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add'
                }
            ]
        });
 
        this.nav.present(prompt);
    }
  //todo
  /*
    1. Modal load for edit/add
    2. Search
    3. 
  */
  /*onPageWillEnter(){
  	//load data from service before
  	
  }*/
}
