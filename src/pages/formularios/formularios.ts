import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-formularios',
  templateUrl: 'formularios.html'
})
export class FormulariosPage {
  formularios = [
    {
      titulo: 'Encuesta de nivel de atencion en el buffet',
      descripcion: 'Con este formulario se desea conocer el nivel de atención del personal que actualente trabaja e el buffet de la universidad.'
    },
    {
      titulo: 'Certificado de alumno regular',
      descripcion: 'Formulario para solicitar el certificado de alumno regular.'
    },
    {
      titulo: 'Formulario 4',
      descripcion: 'fsdfsdfsdfsdfsdfsdfsfds'
    }
  ];
  constructor(public navCtrl: NavController) {

  }

}
