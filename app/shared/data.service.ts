import { Injectable } from '@angular/core';

/*PouchDB Connector*/
let PouchDB = require('PouchDB');

@Injectable()
export class DataService {
  private _db;

  initDB(){
  	this._db = new PouchDB('group-national_tablet_programme');
  }
  //sync to live couchdb
  dbsync(){

  }
}