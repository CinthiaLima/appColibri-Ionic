import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConectorProvider } from '../../providers/conector/conector'
import { VerFormularioPage } from '../ver-formulario/ver-formulario';


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
  
  verFormulario(id: number, titulo: string, descripcion: string){
    this.navCtrl.push(VerFormularioPage, {id: id, titulo: titulo, descripcion: descripcion});
  }

}
