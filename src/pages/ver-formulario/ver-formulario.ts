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
  formulario: FormGroup;
  titulo: string;
  descripcion: string;
  camposFormulario: any = [];
  respuesta: any = {};
  mensajesdeError = {};
  campo_texto: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicioConector: ConectorProvider, public formBuilder: FormBuilder) {
    
    let id = navParams.get('id');
    this.titulo = navParams.get('titulo');
    this.descripcion = navParams.get('descripcion');
    this.getCampos(id);
    this.formulario = this.formBuilder.group({ });
    //this.formulario.addControl('campoPrueba', new FormControl('',[Validators.required, Validators.min(0)]));
    //let validation1 = {"tipo": "required", "mensaje": "d"};
    //let validation2 = {"tipo": "min", "mensaje": "Número invalido"};
    //let obj =[validation1, validation2];
    //this.mensajesdeError['campoPrueba'] = obj;     
    //console.log(this.mensajesdeError);


  }

  private getCampos(id: number){
    this.servicioConector.recuperarCampos(id).subscribe((campos: any) => {
      this.camposFormulario = campos;
      campos.forEach(campo => {
        this.setValidacionesCampo(campo);
      });  
    })
  }

  private setValidacionesCampo(campo: any){
  let mensajeErrorRequired = {"tipo": "required", "mensaje": "Este campo es obligatorio"};
    switch(campo.tipo){
      case 'campo_texto':
      {   
        this.setValidacionesCampoTexto(campo);
        break;
      }
      case 'area_texto':
      {
        let validaciones = null;
        if(campo.esObligatorio == "true"){
          validaciones = [Validators.required];
          this.formulario.addControl(campo.titulo.split(" ").join("_"), new FormControl('', validaciones));
          this.mensajesdeError[campo.titulo.split(" ").join("_")] = [mensajeErrorRequired];  
        }else{
          this.formulario.addControl(campo.titulo.split(" ").join("_"), new FormControl(''));
        }
        break;
      }
      case 'lista_desplegable':
      {
        if(campo.esObligatorio == "true"){
          this.formulario.addControl(campo.titulo.split(" ").join("_"), new FormControl('', Validators.required));
          this.mensajesdeError[campo.titulo.split(" ").join("_")] = [mensajeErrorRequired];  
        }else{
          this.formulario.addControl(campo.titulo.split(" ").join("_"), new FormControl(''));
        }
      }
      case 'lista_boton_radio':
      {
        if(campo.esObligatorio == "true"){
          this.formulario.addControl(campo.titulo.split(" ").join("_"), new FormControl('', Validators.required));
          this.mensajesdeError[campo.titulo.split(" ").join("_")] = [mensajeErrorRequired];
        }else{
          this.formulario.addControl(campo.titulo.split(" ").join("_"), new FormControl(''));
        }
        break;
      }
    }
    console.log(this.mensajesdeError);
  }

  private setValidacionesCampoTexto(campoTexto: any){
    let mensajeErrorRequired = {"tipo": "required", "mensaje": "Este campo es obligatorio"};
    let mensajesError = null;
    let validaciones = null;
    switch(campoTexto.subtipo){
      case 'number':
      {
        let mensajeErrorMin = {"tipo": 'min', "mensaje": "El número ingresado debe ser mayor 0."};    
        mensajesError = [mensajeErrorMin];
        validaciones = [Validators.min(0)];
        if(campoTexto.esObligatorio == 'true'){
          validaciones = [Validators.min(0), Validators.required];
          mensajesError = [mensajeErrorMin, mensajeErrorRequired];
        }
        this.formulario.addControl(campoTexto.titulo.split(" ").join("_"), new FormControl('', validaciones));
        this.mensajesdeError[campoTexto.titulo.split(" ").join("_")] = mensajesError;
        break;
      }
      case 'text':
      {
        if(campoTexto.esObligatorio == 'true'){
          validaciones = [Validators.required];
          this.formulario.addControl(campoTexto.titulo.split(" ").join("_"), new FormControl('', validaciones));
          this.mensajesdeError[campoTexto.titulo.split(" ").join("_")] = [mensajeErrorRequired];
        }else{
          this.formulario.addControl(campoTexto.titulo.split(" ").join("_"), new FormControl(''));
        }
        break;
      }
      case 'email':
      {
        let mensajeErrorMail = {"tipo": "email", "mensaje": "Escriba un correo electronico en el formato aaaa@aaaaa.aaa"};
        validaciones = [Validators.email];
        mensajesError = [mensajeErrorMail];
        if(campoTexto.esObligatorio == 'true'){
          validaciones = [Validators.email, Validators.required];
          mensajesError = [mensajeErrorMail, mensajeErrorRequired];
        }
        this.formulario.addControl(campoTexto.titulo.split(" ").join("_"), new FormControl('', validaciones));
        this.mensajesdeError[campoTexto.titulo.split(" ").join("_")] = mensajesError;
        break;
      }
    }
  }

  //logForm1(formValue:any){
    //console.log("entrooo");
    //console.log(formValue);
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
  //}
  logForm(){

 //   console.log("campo prueba"+this.formulario.controls['campoPrueba'].value)
    if(this.formulario.valid){
      console.log("OK");
      console.log(this.formulario.value);

    }else{
      console.log("Los datos no son válidos");
    }
  }
}