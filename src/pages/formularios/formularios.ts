import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConectorProvider } from '../../providers/conector/conector'


@Component({
  selector: 'page-formularios',
  templateUrl: 'formularios.html'
})
export class FormulariosPage {
  formularios : any;

  constructor(public navCtrl: NavController,private servicioConector:ConectorProvider) {
    this.getFormularios();
  }

  
  getFormularios(){
    this.servicioConector.recuperarFormularios().subscribe((datosFormulario)=>{
      this.formularios = datosFormulario;;  
    })
  }

  getFormulario(){

  }

  

  getCampos(){
    
  }


}
