import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConectorProvider } from '../../providers/conector/conector';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms/'


@IonicPage()
@Component({
  selector: 'page-ver-formulario',
  templateUrl: 'ver-formulario.html',
})
export class VerFormularioPage {
  miform: FormGroup;
  formulario: any;
  titulo: string;
  descripcion: string;
  camposFormulario: any = [];
  respuesta: any = {};
  campo_texto: any;

  public errorMessages = {
    campoPrueba: [
      {type: 'min', message: 'Número invalido'},
      {type: 'required', message: 'Este campo es obligatorio'},
      {type: 'pattern', message: 'Este campo solo admite números'},
      {type: 'nullValidator', message: 'Este campo solo admite números'}

    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicioConector: ConectorProvider, public formBuilder: FormBuilder) {
    
    let id = navParams.get('id');
    this.titulo = navParams.get('titulo');
    this.descripcion = navParams.get('descripcion');
    this.getCampos(id);
    this.miform = this.formBuilder.group({ });
    this.miform.addControl('campoPrueba', new FormControl('',[Validators.required, Validators.min(0), Validators.nullValidator]));
  }

  getCampos(id: number){
    this.servicioConector.recuperarCampos(id).subscribe((campos)=> {
      this.camposFormulario = campos;
    })
  }

  logForm(formValue:any){
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
  }
  logForm1(){
    if(this.miform.valid){
      console.log("OK");
    }else{
      console.log("Los datos no son válidos");
    }
  }
}