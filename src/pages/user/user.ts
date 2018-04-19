import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlayersProvider} from "../../providers/players/players";
import {Player} from "../../models/player";

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  items:any;
  currentPlayers: Player[];

  constructor(public navCtrl: NavController,public players: PlayersProvider, public navParams: NavParams) {
      this.currentPlayers = []
  }

  ionViewDidLoad() {
      this.players.findTenLastUsers().subscribe(
          (result:any) => {
              this.currentPlayers = result
          },
          (error) => {
            console.log(error.message)
          }
      )
  }

  playerSelected(player:Player){
        this.navCtrl.push("PlayerDetailPage", {player:player})
  }

}
