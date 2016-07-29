import { Injectable } from '@angular/core';
import {Storage, SqlStorage} from 'ionic-angular';
 
let PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-authentication'));
PouchDB.plugin(require('pouchdb-find'));
/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  
  db: any;
  remote: any;

  /*Required Improvement- Store data on local pouchdb and sync to remote when there is connection*/
  initDB(){
    this.db = new PouchDB('group-national_tablet_program');
 
    this.remote = new PouchDB('http://localhost:5984/group-national_tablet_program_test');
 
    let options = {
      live: true,
      retry: true,
      continuous: true
    };
 
    //this._db = new PouchDB();
    this.remote.login('admin','admin')
      .then((result) => {

        console.log('DB Connected!');

      }).catch((error) =>{ 

        console.log(error);

      });

      //sync
      this.db.sync(this.remote, options);
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

      return this.db.get(doc);
  }

  addDocument(doc){
    this.db.put(doc);
  }

  search(col, name, user){
    return this.db.find({
      selector: { collection: col, assessmentName: name, enumerator: user }
    });
  }
}
