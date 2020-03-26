webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerFormularioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conector_conector__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerFormularioPage = /** @class */ (function () {
    function VerFormularioPage(navCtrl, navParams, servicioConector) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicioConector = servicioConector;
        this.camposFormularioDecode = [];
        var id = navParams.get('id');
        this.titulo = navParams.get('titulo');
        this.descripcion = navParams.get('descripcion');
        this.getCampos(id);
    }
    VerFormularioPage.prototype.getCampos = function (id) {
        var _this = this;
        this.servicioConector.recuperarCampos(id).subscribe((function (campos) {
            _this.camposFormulario = campos;
            _this.camposFormulario.forEach(function (campo) {
                _this.camposFormularioDecode.push(_this.decodeXtreme(campo));
                document.getElementById("camposForm").innerHTML += _this.decodeXtreme(campo);
                console.log("> > > >   " + _this.decodeXtreme(campo));
            });
        }));
    };
    VerFormularioPage.prototype.arrayCampos = function () {
        var _this = this;
        this.camposFormulario.forEach(function (campo) {
            _this.camposFormularioDecode.push(campo);
        });
    };
    VerFormularioPage.prototype.htmlDecode = function (input) {
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes[0].nodeValue;
    };
    VerFormularioPage.prototype.decodeXtreme = function (input) {
        input = input.replace(/&gt;/g, ">");
        input = input.replace(/&lt;/g, "<");
        input = input.replace(/&quot;/g, '"');
        input = input.replace(/required="required"/g, 'ng-required="true"');
        return input;
    };
    VerFormularioPage.prototype.decode = function (campos) {
        console.log("HOLA ME LLAMARON - " + campos);
        return campos.replace(/[<>'"]/g, function (m) {
            return '&' + {
                '\'': 'apos',
                '"': 'quot',
                '&': 'amp',
                '<': 'lt',
                '>': 'gt',
            }[m] + ';';
        });
    };
    VerFormularioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-formulario',template:/*ion-inline-start:"/home/paire/Documentos/github/appColibri-Ionic/src/pages/ver-formulario/ver-formulario.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Viendo formulario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h4>{{ titulo }}</h4>\n  <ng-template [ngIf]="descripcion">\n    <p class="formulario-descripcion">{{ descripcion }}</p>\n  </ng-template>\n  <hr/>\n  <form>\n    <div ngFor="let campo of camposFormularioDecode">\n      <div [innerHtml]=campo></div>\n    </div>\n    <div id="camposForm"></div>\n    <button ion-button TYPE="submit">Enviar</button>\n  </form>\n  \n</ion-content>'/*ion-inline-end:"/home/paire/Documentos/github/appColibri-Ionic/src/pages/ver-formulario/ver-formulario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_conector_conector__["a" /* ConectorProvider */]])
    ], VerFormularioPage);
    return VerFormularioPage;
}());

//# sourceMappingURL=ver-formulario.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ver-formulario/ver-formulario.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormulariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conector_conector__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ver_formulario_ver_formulario__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormulariosPage = /** @class */ (function () {
    function FormulariosPage(navCtrl, servicioConector) {
        this.navCtrl = navCtrl;
        this.servicioConector = servicioConector;
        this.getFormularios();
    }
    FormulariosPage.prototype.getFormularios = function () {
        var _this = this;
        this.servicioConector.recuperarFormularios().subscribe(function (datosFormulario) {
            _this.formularios = datosFormulario;
            ;
        });
    };
    FormulariosPage.prototype.verFormulario = function (id, titulo, descripcion) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ver_formulario_ver_formulario__["a" /* VerFormularioPage */], { id: id, titulo: titulo, descripcion: descripcion });
    };
    FormulariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formularios',template:/*ion-inline-start:"/home/paire/Documentos/github/appColibri-Ionic/src/pages/formularios/formularios.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Formularios</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n      <ion-item *ngFor="let formulario of formularios">\n        <h2 text-wrap>{{ formulario.titulo }}</h2>\n        <p class="descripcion">{{ formulario.descripcion }}</p>\n        <button class="completar" (click)="verFormulario(formulario.idFormulario, formulario.titulo, formulario.descripcion)" ion-button round icon-end color="green-dark">Ver formulario\n          <ion-icon name="arrow-dropright-circle"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/paire/Documentos/github/appColibri-Ionic/src/pages/formularios/formularios.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_conector_conector__["a" /* ConectorProvider */]])
    ], FormulariosPage);
    return FormulariosPage;
}());

//# sourceMappingURL=formularios.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    AboutPage_1 = AboutPage;
    AboutPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(AboutPage_1, {
            item: item
        });
    };
    AboutPage = AboutPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/paire/Documentos/github/appColibri-Ionic/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Acerca de</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h1 color="primary">Aquí se va a mostrar información acerca de la aplicación</h1>\n</ion-content>\n'/*ion-inline-end:"/home/paire/Documentos/github/appColibri-Ionic/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
    var AboutPage_1;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_formularios_formularios__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ver_formulario_ver_formulario__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_conector_conector__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_formularios_formularios__["a" /* FormulariosPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_ver_formulario_ver_formulario__["a" /* VerFormularioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ver-formulario/ver-formulario.module#VerFormularioPageModule', name: 'VerFormularioPage', segment: 'ver-formulario', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_formularios_formularios__["a" /* FormulariosPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_ver_formulario_ver_formulario__["a" /* VerFormularioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_conector_conector__["a" /* ConectorProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_formularios_formularios__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_formularios_formularios__["a" /* FormulariosPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Formularios', component: __WEBPACK_IMPORTED_MODULE_4__pages_formularios_formularios__["a" /* FormulariosPage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/paire/Documentos/github/appColibri-Ionic/src/app/app.html"*/'<link href="https://fonts.googleapis.com/css?family=Merienda&display=swap" rel="stylesheet"> \n\n<ion-menu [content]="content">\n  <ion-header>\n    <div class="toolbar toolbar-md banner">\n      <img alt="" src="assets/imgs/Colibri.svg"/>\n      <div class="toolbar-title">Colibri</div>    \n    </div>\n  </ion-header>\n\n  \n  <ion-content padding>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <div *ngIf="p.title == \'Formularios\'; then iconoFormulario else iconoAcercaDe"></div>\n        <ng-template #iconoFormulario><ion-icon name="copy" style="margin-right: 5px;"></ion-icon></ng-template>\n        <ng-template #iconoAcercaDe><ion-icon name="contacts" style="margin-right: 5px;"></ion-icon></ng-template>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/paire/Documentos/github/appColibri-Ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConectorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConectorProvider = /** @class */ (function () {
    function ConectorProvider(http) {
        this.http = http;
        this.host = "http://localhost/ionic/";
        //host: string = "http://172.16.8.16/ionic/";
        this.llave = "8c8b6c186ad4940044533c4303a0ab5c";
        console.log('Conexión a la base de datos establecida.');
    }
    ConectorProvider.prototype.obtenerFechaCodificada = function () {
        var fecha = new Date();
        var dia;
        var mes;
        var anio = "" + fecha.getFullYear();
        if (fecha.getDate() < 10) {
            dia = "0" + fecha.getDate();
        }
        else {
            dia = "" + fecha.getDate();
        }
        if (fecha.getMonth() < 10) {
            mes = "0" + (fecha.getMonth() + 1);
        }
        else {
            mes = "" + (fecha.getMonth() + 1);
        }
        console.log(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(dia + mes + anio));
        return __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(dia + mes + anio);
    };
    ConectorProvider.prototype.recuperarFormularios = function () {
        return this.http.get(this.host + "recuperar.formularios.php" +
            "?llave=" + this.llave + this.obtenerFechaCodificada());
    };
    ConectorProvider.prototype.recuperarCampos = function (id) {
        return this.http.get(this.host + "recuperar.campos.php?id=" + id +
            "&llave=" + this.llave + this.obtenerFechaCodificada());
    };
    ConectorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ConectorProvider);
    return ConectorProvider;
}());

//# sourceMappingURL=conector.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map