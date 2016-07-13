import { Injectable } from '@angular/core';
import {Storage, SqlStorage} from 'ionic-angular';
 
let PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-authentication'));
/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  
  private _db;
  
  /*Required Improvement- Store data on local pouchdb and sync to remote when there is connection*/
  initDB(){
    this._db = new PouchDB('http://localhost:5984/group-national_tablet_program');
    this._db.login('admin','admin')
      .then((result) => {

        console.log('DB Connected!');

      }).catch((error) =>{ 

        console.log(error);

      });
  }

  getDocument(doc){
    /*this._db.get(doc)
      .then((result) => {
        //return result
        console.log('Document: ', result);
        return result;

      }).catch((error) => {
        //log error
        console.log('Document Error: ', error);
        return {};
      });*/

      return this._db.get(doc);
  }

  addDocument(doc){
    this._db.put(doc);
  }
}
