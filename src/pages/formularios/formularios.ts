import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-formularios',
  templateUrl: 'formularios.html'
})
export class FormulariosPage {
  formularios : any;
  recuperarFormuarios = "http://localhost/recuperar.formularios.php";

  constructor(public navCtrl: NavController, private http:HttpClient) {
    this.getFormularios();
  }

  getFormularios(){
    this.http.get(this.recuperarFormuarios).subscribe((datosFormulario)=>{
    this.formularios = datosFormulario;  
    })
  }


}
