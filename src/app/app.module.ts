import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//Para validar formularios
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'

import { MyApp } from './app.component';
import { FormulariosPage } from '../pages/formularios/formularios';
import { AboutPage } from '../pages/about/about';
import { VerFormularioPage } from '../pages/ver-formulario/ver-formulario';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConectorProvider } from '../providers/conector/conector';

@NgModule({
  declarations: [
    MyApp,
    FormulariosPage,
    AboutPage,
    VerFormularioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule, 
    FormsModule, 
    CustomFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FormulariosPage,
    AboutPage,
    VerFormularioPage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConectorProvider
  ]
})
export class AppModule {}
