import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

/* Importaciones propias */
import { FormulariosPage } from '../formularios/formularios';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FormulariosPage;
  tab3Root = PerfilPage;
  tab4Root = AboutPage;
  constructor() {

  }
}
