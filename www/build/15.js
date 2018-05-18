webpackJsonp([15],{

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BabyfootDetailPageModule", function() { return BabyfootDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babyfoot_detail__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BabyfootDetailPageModule = /** @class */ (function () {
    function BabyfootDetailPageModule() {
    }
    BabyfootDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__babyfoot_detail__["a" /* BabyfootDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__babyfoot_detail__["a" /* BabyfootDetailPage */]),
            ],
        })
    ], BabyfootDetailPageModule);
    return BabyfootDetailPageModule;
}());

//# sourceMappingURL=babyfoot-detail.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BabyfootDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
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
 * Generated class for the BabyfootDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BabyfootDetailPage = /** @class */ (function () {
    function BabyfootDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.babyfoot = {};
        this.babyfoot = navParams.get("babyfoot");
    }
    BabyfootDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BabyfootDetailPage');
    };
    BabyfootDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-babyfoot-detail',template:/*ion-inline-start:"/Users/francois/Documents/iot/dennis/IoT/src/pages/babyfoot-detail/babyfoot-detail.html"*/'<!--\n  Generated template for the PlayerDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{babyfoot.location}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="http://cdn.oogarden.net/Product/0327/0327-0005-Zoom.jpg">\n      </ion-avatar>\n      <h2>{{babyfoot.location}}</h2>\n      <p>{{babyfoot.max_players}} players</p>\n    </ion-item>\n\n    <img src="http://cdn.oogarden.net/Product/0327/0327-0005-Zoom.jpg">\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <div *ngIf="babyfoot.available">\n              <button col-12 ion-button color="secondary">Disponible</button>\n          </div>\n          <div *ngIf="!babyfoot.available">\n              <button col-12 ion-button color="danger">Indisponible</button>\n          </div>\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/francois/Documents/iot/dennis/IoT/src/pages/babyfoot-detail/babyfoot-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BabyfootDetailPage);
    return BabyfootDetailPage;
}());

//# sourceMappingURL=babyfoot-detail.js.map

/***/ })

});
//# sourceMappingURL=15.js.map