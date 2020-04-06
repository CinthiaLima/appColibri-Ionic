webpackJsonp([1],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerFormularioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conector_conector__ = __webpack_require__(94);
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
        this.camposFormulario = [];
        this.respuesta = {};
        var id = navParams.get('id');
        this.titulo = navParams.get('titulo');
        this.descripcion = navParams.get('descripcion');
        this.getCampos(id);
    }
    VerFormularioPage.prototype.getCampos = function (id) {
        var _this = this;
        this.servicioConector.recuperarCampos(id).subscribe(function (campos) {
            _this.camposFormulario = campos;
        });
    };
    VerFormularioPage.prototype.logForm = function (formValue) {
        console.log("entrooo");
        console.log(formValue);
        /*let camposObligatorios = 0;
        this.camposFormulario.array.forEach(campo => {
          if(campo.esObligatorio == "true" && formValue[campo.titulo] == ("" ||[])){
            camposObligatorios = camposObligatorios +1;
           }
          });
        if(camposObligatorios > 0){
          console.log("Complete los campos que son obligatorios")
        }else{
          this.servicioConector.enviarRespuesta(this.respuestas).subscribe(datos=>{
            console.log(datos);
          },
          (err)=>{
            console.log(err)
          })
        }*/
    };
    VerFormularioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ver-formulario',template:/*ion-inline-start:"/home/paire/Documentos/github/appColibri-Ionic/src/pages/ver-formulario/ver-formulario.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Viendo formulario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h4>{{ titulo }}</h4>\n  <ng-template [ngIf]="descripcion">\n    <p class="formulario-descripcion">{{ descripcion }}</p>\n  </ng-template>\n  <hr/>\n  <form #formularioForm="ngForm" (ngSubmit) = "logForm(formularioForm.value)">\n\n    <ion-list>\n      <ion-item>\n        <ion-input type="number" [(ngModel)]="campo" name="fielderffd" #fieldf="ngModel" [min]="0" [max]="21"></ion-input>\n        </ion-item>\n        <ion-item>\n          <p item-content *ngIf="fieldf.errors?.min">El numero ingresado no es válido</p>\n          <p item-content *ngIf="fieldf.errors?.max">El numero ingresado no es válido</p>\n      </ion-item>\n    </ion-list>\n    \n    <div *ngFor ="let campo of camposFormulario">\n      <p class="campo-cabecera" *ngIf="campo.esObligatorio == \'true\'">{{ campo.titulo }}\n          <span style="color: red; font-weight: bold;">*</span>\n      </p>\n      <p class="campo-cabecera" *ngIf="campo.esObligatorio == \'false\'">{{ campo.titulo }}</p>\n      <p class="campo-descripcion">{{ campo.descripcion }}</p> \n\n      <ion-list [ngSwitch]="campo.tipo">\n      <!-- Campo de texto (texto, numerico, email)--> \n      <ion-list *ngSwitchCase="\'campo_texto\'">\n        <ion-item>\n          <ion-input *ngIf= "campo.subtipo == \'number\'" [(ngModel)]="campo.tipo" #campoNumerico="ngModel" name="{{campo.titulo.split(\' \').join(\'_\')}}" required="{{campo.esObligatorio}}" placeholder="{{campo.pista}}" type="{{campo.subtipo}}" [min]=0></ion-input>\n          <ion-input *ngIf= "campo.subtipo != \'number\'" (ngModel)="campo.tipo" name="{{campo.titulo.split(\' \').join(\'_\')}}" required="{{campo.esObligatorio}}" placeholder="{{campo.pista}}" type="{{campo.subtipo}}"></ion-input>         \n        </ion-item>\n        <ion-item>\n          <p item-content *ngIf="campoNumerico?.errors?.min">El numero ingresado no es válido</p>\n        </ion-item>\n      </ion-list>\n        \n        \n        <!-- Area de texto -->\n        <ion-item *ngSwitchCase= "\'area_texto\'">\n          <ion-textarea ngModel="campo.tipo" name="{{campo.titulo.split(\' \').join(\'_\')}}" maxlength="{{campo.limiteCaracteres}" required="{{campo.esObligatorio}}" ngModel></ion-textarea>\n        </ion-item>     \n        <!-- Lista desplegable -->\n        <ion-item *ngSwitchCase="\'lista_desplegable\'">\n            <ion-label>Elija una opción</ion-label>\n            <ion-select ngModel="campo.tipo" cancelText="Cancelar" name="{{campo.titulo.split(\' \').join(\'_\')}}" ngModel okText="Aceptar" required="{{campo.esObligatorio}}">\n              <ion-option *ngFor="let opcion of campo.opciones" value="{{opcion}}">{{opcion}}</ion-option>\n            </ion-select>\n        </ion-item>      \n        <!-- Lista radio-button -->\n        <ion-list radio-group *ngSwitchCase="\'lista_boton_radio\'" required="{{ campo.esObligatorio }}" name="{{campo.titulo.split(\' \').join(\'_\')}}" ngModel>\n          <ion-item *ngFor="let opcion of campo.opciones">\n            <ion-label>{{ opcion }}</ion-label>\n            <ion-radio value="{{opcion}}"></ion-radio>\n          </ion-item>\n        </ion-list>\n        <!-- Lista checkbox -->\n        <ion-list *ngSwitchCase="\'lista_checkbox\'">\n          <ion-item *ngFor="let opcion of campo.opciones">\n            <ion-label>{{ opcion }}</ion-label>\n            <ion-checkbox ngModel="{{opcion}}" name="{{campo.titulo.split(\' \').join(\'_\')}}" ngModel></ion-checkbox>\n          </ion-item>\n        </ion-list>\n        <!-- Fecha -->\n        <ion-item *ngSwitchCase="\'fecha\'">\n          <ion-datetime name="{{campo.titulo.split(\' \').join(\'_\')}}" cancelText="Cancelar" displayFormat="DD/MM/YYYY" doneText="Aceptar" placeholder="Toque aquí para elegir una fecha" required="{{campo.esObligatorio}}" ngModel></ion-datetime>\n        </ion-item>\n      </ion-list>\n  </div>\n    <button ion-button type="submit" click="enviarFormulario()">Enviar</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/paire/Documentos/github/appColibri-Ionic/src/pages/ver-formulario/ver-formulario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_conector_conector__["a" /* ConectorProvider */]])
    ], VerFormularioPage);
    return VerFormularioPage;
}());

//# sourceMappingURL=ver-formulario.js.map

/***/ }),

/***/ 136:
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
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ver-formulario/ver-formulario.module": [
		434,
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
webpackAsyncContext.id = 177;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormulariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conector_conector__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ver_formulario_ver_formulario__ = __webpack_require__(124);
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
        });
    };
    FormulariosPage.prototype.verFormulario = function (id, titulo, descripcion) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ver_formulario_ver_formulario__["a" /* VerFormularioPage */], { id: id, titulo: titulo, descripcion: descripcion });
    };
    FormulariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-formularios',template:/*ion-inline-start:"/home/paire/Documentos/github/appColibri-Ionic/src/pages/formularios/formularios.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Formularios</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n      <ion-item *ngFor="let formulario of formularios">\n        <h2 text-wrap>{{ formulario.titulo }}</h2>\n        <p class="descripcion">{{ formulario.descripcion }}</p>\n        <button class="completar" (click)="verFormulario(formulario.idFormulario, formulario.titulo, formulario.descripcion)" ion-button round icon-end color="green-dark">Ver formulario\n          <ion-icon name="arrow-dropright-circle"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/paire/Documentos/github/appColibri-Ionic/src/pages/formularios/formularios.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_conector_conector__["a" /* ConectorProvider */]])
    ], FormulariosPage);
    return FormulariosPage;
}());

//# sourceMappingURL=formularios.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/home/paire/Documentos/github/appColibri-Ionic/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Acerca de</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h1 color="primary">Aquí se va a mostrar información acerca de la aplicación</h1>\n</ion-content>\n'/*ion-inline-end:"/home/paire/Documentos/github/appColibri-Ionic/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
    var AboutPage_1;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(288);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_validation__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_formularios_formularios__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ver_formulario_ver_formulario__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_conector_conector__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Para validar formularios










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_formularios_formularios__["a" /* FormulariosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ver_formulario_ver_formulario__["a" /* VerFormularioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ver-formulario/ver-formulario.module#VerFormularioPageModule', name: 'VerFormularioPage', segment: 'ver-formulario', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_validation__["CustomFormsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_formularios_formularios__["a" /* FormulariosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ver_formulario_ver_formulario__["a" /* VerFormularioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_conector_conector__["a" /* ConectorProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_formularios_formularios__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(266);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/paire/Documentos/github/appColibri-Ionic/src/app/app.html"*/'<link href="https://fonts.googleapis.com/css?family=Merienda&display=swap" rel="stylesheet"> \n\n<ion-menu [content]="content">\n  <ion-header>\n    <div class="toolbar toolbar-md banner">\n      <img alt="" src="assets/imgs/Colibri.svg"/>\n      <div class="toolbar-title">Colibri</div>    \n    </div>\n  </ion-header>\n\n  \n  <ion-content padding>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <div *ngIf="p.title == \'Formularios\'; then iconoFormulario else iconoAcercaDe"></div>\n        <ng-template #iconoFormulario><ion-icon name="copy" style="margin-right: 5px;"></ion-icon></ng-template>\n        <ng-template #iconoAcercaDe><ion-icon name="contacts" style="margin-right: 5px;"></ion-icon></ng-template>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/paire/Documentos/github/appColibri-Ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConectorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(319);
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
        this.host = "http://172.16.8.102/ionic/";
        //host: string = "http://172.16.8.16/ionic/"; Compu ariel
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
        return __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(dia + mes + anio);
    };
    ConectorProvider.prototype.recuperarFormularios = function () {
        return this.http.get(this.host + "recuperar.formularios.php" +
            "?llave=" + this.llave + this.obtenerFechaCodificada());
    };
    ConectorProvider.prototype.recuperarCampos = function (id) {
        return this.http.get(this.host + "recuperar.campos_alternativo.php?id=" + id +
            "&llave=" + this.llave + this.obtenerFechaCodificada());
    };
    ConectorProvider.prototype.enviarRespuesta = function (respuesta) {
        return this.http.post(this.host + "ionicPost.php", JSON.stringify(respuesta));
    };
    ConectorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ConectorProvider);
    return ConectorProvider;
}());

//# sourceMappingURL=conector.js.map

/***/ })

},[267]);
//# sourceMappingURL=main.js.map