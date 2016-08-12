import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Data } from '../../providers/data/data';
/*
  Generated class for the Feedback provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AssessmentsService {
  selectors: any;

  constructor(private http: Http, private dataService: Data) {
    this.dataService = dataService;
  }

  getResults(){
    return this.dataService.search('result','Tusome Worldreader Observation Tool for NTT and RTI','admin');
  }
}

