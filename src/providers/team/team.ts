import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { Storage } from '@ionic/storage';

/*
  Generated class for the TeamProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeamProvider {

  username:string;
  team:string;
  dataTeam: object;


  constructor(public api: Api, private storage: Storage) {

  }

  findData(teamId) {
    return this.api.get('team/' + teamId)
  }

}