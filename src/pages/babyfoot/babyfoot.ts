import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Babyfoot} from "../../models/babyfoot";
import {BabyfootProvider} from "../../providers/babyfoot/babyfoot";
import SailsSocket from "sails-socket";
import _ from "lodash";
import {Observable} from "rxjs/Observable";
import { ChangeDetectorRef } from '@angular/core'

/**
 * Generated class for the BabyfootPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-babyfoot',
  templateUrl: 'babyfoot.html',
})
export class BabyfootPage {

    items:any;
    allFussballTables: Babyfoot[];
    applicationRef:any;

    constructor(public navCtrl: NavController,public babyfoot: BabyfootProvider, public navParams: NavParams, private ref: ChangeDetectorRef) {
        this.allFussballTables = [];
        SailsSocket.on('babyfoot', (msg) => {
            let data = msg.data;

            if(msg.verb == "updated"){
                var current = this.allFussballTables.filter(function(table){
                    return table.id == data.id
                });
                _.extend(current, data); //use lodash function to change the appropriate attributes of the object
                ref.detectChanges(); //This function refreshes the view, _.extend changes the object but does not trigger a refresh on it's own

            }


        });
    }


    ionViewDidLoad() {

        //GetAll function from the provider, this basicly calls a get on the appropriate route using sockets
        this.babyfoot.getAll().subscribe(
            (result:any) => {
                console.log(result);
                this.allFussballTables = result.body;

            },
            (error) => {
                console.log(error.message)
            }
        );
    }

    tableSelected(babyfoot:Babyfoot){
        this.navCtrl.push("BabyfootDetailPage", {babyfoot:babyfoot})
    }

}
