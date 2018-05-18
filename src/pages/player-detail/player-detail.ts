import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Player } from "../../models/player";
import { TeamProvider } from "../../providers/team/team";
import { Api } from '../../providers/api/api';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PlayerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player-detail',
  templateUrl: 'player-detail.html',
})
export class PlayerDetailPage {

  player: Player = {};
  dataTeam;
  username;
  teamId;
  teamPlayers: Player = {};
  teamPlayersMap = [];


  constructor(public team: TeamProvider, public navCtrl: NavController, public navParams: NavParams, public api: Api, private storage: Storage) {
    this.player = navParams.get("player")
    console.log('mon obj player' + this.player.team.id)
  }


  ionViewDidLoad() {
    this.storage.get('user').then((val) => {
      this.username = val.username
      this.teamId = val.idTeam
      console.log('ma teamId :' + this.teamId);

      this.team.findData(this.player.team.id).subscribe(
        (res: any) => {
          this.teamPlayers = res;
          this.teamPlayersMap = this.teamPlayers.members;
          console.log('on est bon: ' + this.teamPlayers);
        },
        (error: any) => { }
      )

    })

  }

}
