import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/**import propios */
import { FormulariosPage } from '../pages/formularios/formularios';
/*import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';*/
import { PerfilPage } from '../pages/perfil/perfil';
import { VerFormularioPage } from '../pages/ver-formulario/ver-formulario';
import { ConectorProvider } from '../providers/conector/conector';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    FormulariosPage,
    PerfilPage,
    VerFormularioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    FormulariosPage,
    PerfilPage,
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
