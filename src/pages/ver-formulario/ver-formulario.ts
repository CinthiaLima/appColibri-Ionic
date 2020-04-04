import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConectorProvider } from '../../providers/conector/conector';

@IonicPage()
@Component({
  selector: 'page-ver-formulario',
  templateUrl: 'ver-formulario.html',
})
export class VerFormularioPage {

  formulario: any;
  titulo: string;
  descripcion: string;
  camposFormulario: any;
  respuesta: any = {};
  campo_texto: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private servicioConector: ConectorProvider) {
    let id = navParams.get('id');
    this.titulo = navParams.get('titulo');
    this.descripcion = navParams.get('descripcion');
    this.getCampos(id);
  }

  getCampos(id: number){
    this.servicioConector.recuperarCampos(id).subscribe((campos)=> {
      this.camposFormulario = campos;
    })
  }

  logForm(formValue: any){
    console.log("entrooo");
   // console.log(formValue);
    this.servicioConector.enviarRespuesta(formValue).subscribe(datos=>{
      console.log(datos);
    },
    (err)=>{
      console.log(err)
    })
  }
}