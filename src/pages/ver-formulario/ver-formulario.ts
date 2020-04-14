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
//  formulario: any;
  titulo: string;
  descripcion: string;
  camposFormulario: any = [];
  respuesta: any = {};
  errorMessages2: any = [];
  campo_texto: any;

  public errorMessages = {
    campoPrueba: [
      {type: 'min', message: 'Número invalido'},
      {type: 'required', message: 'Este campo es obligatorio'}
    ],
    DNI: [
      {type: 'min', message: 'Número invalido'},
      {type: 'required', message: 'Este campo es obligatorio'}
    ],
    Nombre: [
      {type: 'required', message: 'Es campo es obligatorio'}
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicioConector: ConectorProvider, public formBuilder: FormBuilder) {
    
    let id = navParams.get('id');
    this.titulo = navParams.get('titulo');
    this.descripcion = navParams.get('descripcion');
    this.getCampos(id);
    this.formulario = this.formBuilder.group({ });   
    this.formulario.addControl('campoPrueba', new FormControl('',[Validators.required, Validators.min(0)]));
    this.errorMessages2.push({campoPrueba: [{"type": 'min', "message": "Número invalido"}, {"type": 'required', "message": "d"}]});
    
    //this.errorMessages2.campoPrueba = [];
    //this.errorMessages2.campoPrueba.push({"type": 'required', "message": "d"});
    //this.errorMessages2.campoPrueba.push({"type": 'min', "message": "Número invalido"});
    console.log(this.errorMessages2);
    console.log(this.errorMessages);

    //this.formulario.addControl('dni', new FormControl('',[Validators.required, Validators.min(0)]));
  }

  getCampos(id: number){
    this.servicioConector.recuperarCampos(id).subscribe((campos: any) => {
      this.camposFormulario = campos;


      campos.forEach(campo => {
        console.log("entro al for");
        this.setValidacionesCampo(campo);
      });
  
    })
  }

  setValidacionesCampo(campo: any){
    switch(campo.tipo){
      case 'campo_texto':
        {
          switch(campo.subtipo){
            case 'number':{
              let validaciones: any;
              validaciones = [Validators.min(0)];
              if(campo.esObligatorio == 'true'){
                validaciones = [Validators.min(0), Validators.required];
              }
              this.formulario.addControl(campo.titulo, new FormControl('',validaciones));
              this.errorMessages
              break;
            }
            case 'text':{
              let validaciones: any;
              if(campo.esObligatorio == 'true'){
                validaciones = [Validators.required]
              }
              this.formulario.addControl(campo.titulo, new FormControl('',validaciones));
              break;
            }
            case 'email':{
              
              break;
            }
          }
          break;
        }
      
      default:
        {
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