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
            console.log('data', data);
            console.log('before', this.allFussballTables);

            var current = this.allFussballTables.filter(function(table){
                return table.id == data.id
            });
            let newItem = _.extend(current, data);
            this.allFussballTables.push(newItem);
            ref.detectChanges();
            console.log('after', this.allFussballTables);
        });
    }


    ionViewDidLoad() {
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

    handleMessageReceived() {

    }

    trackByFn(index,item){
        return index;
    }

}
