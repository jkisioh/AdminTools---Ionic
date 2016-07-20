import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';

/*
  Generated class for the ZonePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/zone/zone.html',
})
export class Zone {
  private subcountyId;

  //////////////////////
  constructor(private nav: NavController, private navParams: NavParams) {
  	this.subcountyId = navParams.get('item');
  	
  }

}
