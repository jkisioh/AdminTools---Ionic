import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class Home {

	public locationList;

  constructor(private navController: NavController) {

  }

}
