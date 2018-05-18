webpackJsonp([8],{

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDetailPageModule", function() { return PlayerDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_detail__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlayerDetailPageModule = /** @class */ (function () {
    function PlayerDetailPageModule() {
    }
    PlayerDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__player_detail__["a" /* PlayerDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__player_detail__["a" /* PlayerDetailPage */]),
            ],
        })
    ], PlayerDetailPageModule);
    return PlayerDetailPageModule;
}());

//# sourceMappingURL=player-detail.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_team_team__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PlayerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayerDetailPage = /** @class */ (function () {
    function PlayerDetailPage(team, navCtrl, navParams, api, storage) {
        this.team = team;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.storage = storage;
        this.player = {};
        this.teamPlayers = {};
        this.teamPlayersMap = [];
        this.player = navParams.get("player");
        console.log('mon obj player' + this.player.team.id);
    }
    PlayerDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.username = val.username;
            _this.teamId = val.idTeam;
            console.log('ma teamId :' + _this.teamId);
            _this.team.findData(_this.player.team.id).subscribe(function (res) {
                _this.teamPlayers = res;
                _this.teamPlayersMap = _this.teamPlayers.members;
                console.log('on est bon: ' + _this.teamPlayers);
            }, function (error) { });
        });
    };
    PlayerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-player-detail',template:/*ion-inline-start:"/Users/francois/Documents/iot/dennis/IoT/src/pages/player-detail/player-detail.html"*/'<!--\n  Generated template for the PlayerDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{player.username}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="http://img.bfmtv.com/c/1000/600/rmc/430625.jpg">\n      </ion-avatar>\n      <h2>{{player.username}}</h2>\n      <div *ngIf="player.team.name">\n        <ion-badge item-end>{{player.team.name}}</ion-badge>\n      </div>\n    </ion-item>\n\n    <img src="http://img.bfmtv.com/c/1000/600/rmc/430625.jpg">\n\n    <ion-row>\n      <ion-col center text-center>\n        <ion-note>\n          Update : {{player.updatedAt}}\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-row>\n    <button ion-button full>{{player.team.name}}</button>\n  </ion-row>\n\n  <ion-list>\n    <ion-card *ngFor="let item of teamPlayersMap">\n\n      <ion-card-content>\n        <ion-item>\n          <ion-icon name="person" item-start></ion-icon>\n          {{item.firstName}} {{item.lastName}}\n          <ion-badge item-end> {{item.username}} </ion-badge>\n        </ion-item>\n      </ion-card-content>\n\n    </ion-card>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/francois/Documents/iot/dennis/IoT/src/pages/player-detail/player-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_team_team__["a" /* TeamProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], PlayerDetailPage);
    return PlayerDetailPage;
}());

//# sourceMappingURL=player-detail.js.map

/***/ })

});
//# sourceMappingURL=8.js.map