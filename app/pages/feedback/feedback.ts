import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedbackService } from '../../providers/feedback/feedback.service';
/*
  Generated class for the FeedbackPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/feedback/feedback.html',
})
export class Feedback {
  public results;
  public keyArray;

  constructor(private nav: NavController, private feedbackService: FeedbackService) {
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
