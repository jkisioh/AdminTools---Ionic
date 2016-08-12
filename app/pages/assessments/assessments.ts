import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AssessmentsService } from '../../providers/assessments/assessments.service';
/*
  Generated class for the AssessmentsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/assessments/assessments.html',
})
export class Assessments {

  public results;
  public keyArray;

  constructor(private nav: NavController, private feedbackService: AssessmentsService) {
  	this.feedbackService = feedbackService;

  	this.init();
  }

  init(){

  	this.results = this.feedbackService.getResults()
      .then((result) => {
        
        this.results = result.docs;
        //set array keys
        this.keyArray = Object.keys(this.results);
        
        console.log('Feedback View Loaded', this.results);

      }).catch((error) => {
        console.log(error);
    });
  }

}
