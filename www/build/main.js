webpackJsonp([0],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelainicialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(294);
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
 * Generated class for the TelainicialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TelainicialPage = (function () {
    function TelainicialPage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
    }
    TelainicialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TelainicialPage');
    };
    TelainicialPage.prototype.openLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    TelainicialPage.prototype.openRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    TelainicialPage.prototype.loginFacebook = function () {
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) { return console.log('Logged into Facebook!', res); })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    return TelainicialPage;
}());
TelainicialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-telainicial',template:/*ion-inline-start:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/telainicial/telainicial.html"*/'<!--\n  Generated template for the TelainicialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: #03A9F4">\n  <div  style="text-align: center; margin-top: 100px">\n    <div style="display: inline-block;">\n  <img style="width: 60%" src="assets/izzylight.png">\n    </div>\n  </div>\n  <button (click)="openLogin()" style="margin-top:50%">\n    ENTRAR\n  </button>\n  <button (click)="openRegister()">\n    CADASTRO\n  </button>\n  <button (click)="loginFacebook()">\n    <ion-icon name="logo-facebook"></ion-icon>\n    FACEBOOK LOGIN\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/telainicial/telainicial.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]])
], TelainicialPage);

//# sourceMappingURL=telainicial.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 201;

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(245);
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
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.logar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Izzy Passageiro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color: rgb(245,245,245)" padding>\n  <input type="email" placeholder="Username">\n  <input type="password" placeholder="Password">\n    <div  style="text-align: center">\n      <div style="display: inline-block;">\n        <button (click)="logar()" ion-button >\n        ENTRAR\n  </button>\n  </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__solicitacao_solicitacao__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addamigos_addamigos__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popovermenu_popovermenu__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__definirdestino_definirdestino__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(geolocation, popoverCtrl, navCtrl) {
        this.geolocation = geolocation;
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.funcao1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__solicitacao_solicitacao__["a" /* SolicitacaoPage */]);
    };
    HomePage.prototype.funcao2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addamigos_addamigos__["a" /* AddamigosPage */]);
    };
    HomePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__popovermenu_popovermenu__["a" /* PopovermenuPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage.prototype.funcao3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__definirdestino_definirdestino__["a" /* DefinirdestinoPage */]);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], HomePage.prototype, "mapElement", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Izzy Passageiro\n    </ion-title>\n    <ion-buttons end>\n    <button style = "25px;" (click) = "funcao1()" ion-button>\n        <ion-icon name="notifications"></ion-icon>\n    </button>\n      </ion-buttons>\n      <ion-buttons end>\n    <button style = "25px;" (click) = "funcao2()" ion-button>\n      <ion-icon name="person-add"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button style = "25px;" (click)="presentPopover($event)" ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div style="width:100%; height:94%" #map id="map" ></div>\n\n  <div style ="height: 7%; background-color: #03A9F4; width: 100%">\n    <div  style="text-align: center">\n      <div style="display: inline-block;">\n        <button style="height: 30px; background-color: #f4f4f4; margin-top:5px" (click)="funcao3()">PEDIR CARONA</button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* PopoverController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _d || Object])
], HomePage);

var _a, _b, _c, _d;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
 * Generated class for the SolicitacaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SolicitacaoPage = (function () {
    function SolicitacaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SolicitacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SolicitacaoPage');
    };
    return SolicitacaoPage;
}());
SolicitacaoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-solicitacao',template:/*ion-inline-start:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/solicitacao/solicitacao.html"*/'<!--\n  Generated template for the SolicitacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Solicitação de Amizade</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/solicitacao/solicitacao.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], SolicitacaoPage);

//# sourceMappingURL=solicitacao.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddamigosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
 * Generated class for the AddamigosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddamigosPage = (function () {
    function AddamigosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddamigosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddamigosPage');
    };
    return AddamigosPage;
}());
AddamigosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addamigos',template:/*ion-inline-start:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/addamigos/addamigos.html"*/'\n<!--\n  Generated template for the AddamigosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Adicionar amigos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div style="background-color: #29B6F6; height: 60px; padding: 10px;">\n    <input style="width: 100%; border-radius: 5px; background-color: #4FC3F7; border: 0px; height: 40px; font-size: 20px; color: white" placeholder="Pesquisar Usuário">\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/addamigos/addamigos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], AddamigosPage);

//# sourceMappingURL=addamigos.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopovermenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracoes_configuracoes__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__amigos_amigos__ = __webpack_require__(252);
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
 * Generated class for the PopovermenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PopovermenuPage = (function () {
    function PopovermenuPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopovermenuPage.prototype.openConfig = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__configuracoes_configuracoes__["a" /* ConfiguracoesPage */]);
        this.viewCtrl.dismiss();
    };
    PopovermenuPage.prototype.openFriends = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__amigos_amigos__["a" /* AmigosPage */]);
        this.viewCtrl.dismiss();
    };
    return PopovermenuPage;
}());
PopovermenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-popovermenu',template:/*ion-inline-start:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/popovermenu/popovermenu.html"*/'<ion-list>\n  <ion-list-header>Menu</ion-list-header>\n  <button ion-item (click)="openConfig()">Configurações</button>\n  <button ion-item (click)="openFriends()">Amigos</button>\n</ion-list>\n'/*ion-inline-end:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/popovermenu/popovermenu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], PopovermenuPage);

//# sourceMappingURL=popovermenu.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__telainicial_telainicial__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sobre_sobre__ = __webpack_require__(251);
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
 * Generated class for the ConfiguracoesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ConfiguracoesPage = (function () {
    function ConfiguracoesPage(navCtrl, navParams, imagePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagePicker = imagePicker;
        this.imagePicker.getPictures(this.options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
        }, function (err) { });
    }
    ConfiguracoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracoesPage');
    };
    ConfiguracoesPage.prototype.sair = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__telainicial_telainicial__["a" /* TelainicialPage */]);
    };
    ConfiguracoesPage.prototype.openSobre = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sobre_sobre__["a" /* SobrePage */]);
    };
    return ConfiguracoesPage;
}());
ConfiguracoesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-configuracoes',template:/*ion-inline-start:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/configuracoes/configuracoes.html"*/'<!--\n  Generated template for the ConfiguracoesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Configurações</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color: #f4f4f4" padding>\n  <td><div style="position: relative">\n    <img style="display: block; width: 100px; height: 100px; border-radius: 50%" src="">\n    <button style="background-color: white; border-radius: 50%; width: 35px; height: 35px; position: absolute; right: 0px; bottom: 0px">\n      <ion-icon name="md-create" (click)="getPictures(this.options)"></ion-icon>\n    </button>\n  </div>\n  </td>\n  <td>\n    <td valign="middle">\n    <div style="font-size: 20px; color: gray; padding-left: 20px;">Nome do Usuário</div>\n  </td>\n<ion-list style=" padding-top: 15px">\n  <button (click)="openSobre()" style="color:gray; background-color: transparent" ion-item>Sobre</button>\n  <button (click)="sair()" style="color:gray; background-color: transparent" ion-item>Sair</button>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/configuracoes/configuracoes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */]])
], ConfiguracoesPage);

//# sourceMappingURL=configuracoes.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
 * Generated class for the SobrePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SobrePage = (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    return SobrePage;
}());
SobrePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sobre',template:/*ion-inline-start:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/sobre/sobre.html"*/'<!--\n  Generated template for the SobrePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sobre</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  Desenvolvido por Pyxis Co. <br>\n  Em LUDUS Lab\n\n</ion-content>\n'/*ion-inline-end:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/sobre/sobre.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], SobrePage);

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmigosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
 * Generated class for the AmigosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AmigosPage = (function () {
    function AmigosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.amigos = [
            {
                "nome": "Amigo1",
                "imagem": "http://www.caixa.gov.br/PublishingImages/Paginas/LT_T026/banner_header_conta_corrente.jpg"
            },
            {
                "nome": "Amigo2",
                "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aJty4PObI0siJo4CPJaRmtYWRn9GI5y9gsK8OrbxH34Nuh5TCQ"
            }
        ];
        console.log(this.amigos);
    }
    return AmigosPage;
}());
AmigosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-amigos',template:/*ion-inline-start:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/amigos/amigos.html"*/'<!--\n  Generated template for the AmigosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Amigos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item *ngFor="let amigo of amigos">\n\n    <td><img style="height:60px; width:60px; border-radius: 50%;" src="{{amigo.imagem}}"></td>\n    <td valign="middle"><div style="padding-left: 20px; font-size: 16px; color: gray">{{amigo.nome}}</div></td>\n\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/amigos/amigos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], AmigosPage);

//# sourceMappingURL=amigos.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefinirdestinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DefinirdestinoPage = (function () {
    function DefinirdestinoPage(geolocation, navCtrl, navParams) {
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DefinirdestinoPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    DefinirdestinoPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    return DefinirdestinoPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], DefinirdestinoPage.prototype, "mapElement", void 0);
DefinirdestinoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-definirdestino',template:/*ion-inline-start:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/definirdestino/definirdestino.html"*/'<!--\n  Generated template for the DefinirdestinoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Definir Destino</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div style="background-color: #29B6F6; height: 60px; padding: 10px;">\n\n      <input style="width: 100%; border-radius: 5px; background-color: #4FC3F7; border: 0px; height: 40px; font-size: 20px; color: white" placeholder="Localização Atual">\n    </div>\n  <div style="background-color: #29B6F6; height: 60px; padding: 10px;">\n    <input style="width: 100%; border-radius: 5px; background-color: #4FC3F7; border: 0px; height: 40px; font-size: 20px; color: white;" placeholder="Destino">\n  </div>\n\n    <div style="width:100%; height:100%" #map id="map" ></div>\n\n\n  <div>\n        <button style="height: 30px; background-color: #f4f4f4; margin-top:5px" (click)="funcao3()">PEDIR CARONA</button>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/definirdestino/definirdestino.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], DefinirdestinoPage);

//# sourceMappingURL=definirdestino.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(427);
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
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, auth, db, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.db = db;
        this.toast = toast;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.onSignUp = function (form) {
        var _this = this;
        var nome = form.value.nome;
        var sobrenome = form.value.sobrenome;
        var username = form.value.username;
        var password = form.value.password;
        this.auth.auth.createUserWithEmailAndPassword(username, password).then(function () {
            var user$ = _this.db.object('User/' + _this.auth.auth.currentUser.uid);
            user$.set({
                nome: nome,
                sobrenome: sobrenome,
                imagem: 'assets/icon/unknown.jpeg'
            }).then(function () {
            }, function (err) { return console.log(err); });
        }, function (err) { return console.log(err); });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Izzy Passageiro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color: rgb(245,245,245)" padding>\n<form (ngSubmit)="onSignUp(r)" #r="ngForm">\n  <div class="form-group">\n    <label for="nome"></label>\n    <input class="form-control" id="nome" name="nome" class="input1" type="text" placeholder="Nome" ngModel></div>\n  <div class="form-group">\n    <label for="sobrenome"></label>\n    <input class="form-control" id="sobrenome" name="sobrenome" class="input1" style="float: right" type="text" placeholder="Sobrenome" ngModel></div>\n  <div class="form-group">\n    <label for="username"></label>\n    <input class="form-control" id="username" name="username" class="input2" type="email" placeholder="Username" ngModel></div>\n  <div class="form-group">\n    <label for="password"></label>\n    <input class="form-control" id="password" name="password" class="input2" type="password" placeholder="Password" ngModel></div>\n  <div class="form-group">\n    <label for="cpassword"></label>\n    <input class="form-control" id="cpassword" name="cpassword" class="input2" type="password" placeholder="Confirm Password" ngModel></div>\n\n\n\n  <div  style="text-align: center">\n    <div style="display: inline-block;">\n      <button type="submit" ion-button>\n        CRIAR CONTA\n      </button>\n    </div>\n  </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/StephBarreto/Documents/IzzyPassageiro/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(320);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_solicitacao_solicitacao__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_addamigos_addamigos__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_popovermenu_popovermenu__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_configuracoes_configuracoes__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_amigos_amigos__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agm_core__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_telainicial_telainicial__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_definirdestino_definirdestino__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_firebase_app__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_facebook__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_image_picker__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_sobre_sobre__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var config = {
    apiKey: "AIzaSyDiAABmy_9yOqDurJKf0wMrWOJTy4mV7Fc",
    authDomain: "izzyapp-b7340.firebaseapp.com",
    databaseURL: "https://izzyapp-b7340.firebaseio.com",
    projectId: "izzyapp-b7340",
    storageBucket: "izzyapp-b7340.appspot.com",
    messagingSenderId: "725536231405"
};
__WEBPACK_IMPORTED_MODULE_20_firebase_app__["initializeApp"](config);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_solicitacao_solicitacao__["a" /* SolicitacaoPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_addamigos_addamigos__["a" /* AddamigosPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_popovermenu_popovermenu__["a" /* PopovermenuPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_configuracoes_configuracoes__["a" /* ConfiguracoesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_amigos_amigos__["a" /* AmigosPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_telainicial_telainicial__["a" /* TelainicialPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_definirdestino_definirdestino__["a" /* DefinirdestinoPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_sobre_sobre__["a" /* SobrePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_12__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCDn2rm7aWxmPOiVfchGWBcZjffHzF4Bis'
            }),
            __WEBPACK_IMPORTED_MODULE_17_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["b" /* AngularFireDatabaseModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_solicitacao_solicitacao__["a" /* SolicitacaoPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_addamigos_addamigos__["a" /* AddamigosPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_popovermenu_popovermenu__["a" /* PopovermenuPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_configuracoes_configuracoes__["a" /* ConfiguracoesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_amigos_amigos__["a" /* AmigosPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_telainicial_telainicial__["a" /* TelainicialPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_definirdestino_definirdestino__["a" /* DefinirdestinoPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_sobre_sobre__["a" /* SobrePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__["a" /* Geolocation */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_telainicial_telainicial__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_telainicial_telainicial__["a" /* TelainicialPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/StephBarreto/Documents/IzzyPassageiro/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/StephBarreto/Documents/IzzyPassageiro/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[303]);
//# sourceMappingURL=main.js.map