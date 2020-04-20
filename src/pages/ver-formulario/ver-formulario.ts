import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConectorProvider } from '../../providers/conector/conector';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { FormBuilder } from '@angular/forms/'
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-ver-formulario',
  templateUrl: 'ver-formulario.html',
})
export class VerFormularioPage {
  public formulario: FormGroup;
  public opcionesCheckboxes: FormGroup;
  private opcionesElegidas = [];
  public titulo: string;
  public descripcion: string;
  public camposFormulario: any = [];
  public mensajesdeError = {};


  constructor(public navCtrl: NavController, public navParams: NavParams, private servicioConector: ConectorProvider, private formBuilder: FormBuilder, private toastCtrl: ToastController){
    
    let id = navParams.get('id');
    this.titulo = navParams.get('titulo');
    this.descripcion = navParams.get('descripcion');
    this.getCampos(id);
    this.formulario = this.formBuilder.group({ });
  }

  private getCampos(id: number){
    this.servicioConector.recuperarCampos(id).subscribe((campos: any) => {
      this.camposFormulario = campos;
      campos.forEach(campo => {
        this.setValidacionesCampo(campo);
      });
      console.log(this.mensajesdeError);
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
      case 'lista_checkbox':
      {
        //Inicialización de las opciones de la lista_checkbox
        this.opcionesCheckboxes = this.formBuilder.group({});
        campo.opciones.forEach((opcion: any) =>{
          this.opcionesCheckboxes.addControl(opcion, new FormControl('false'));
        })
        console.log(this.opcionesCheckboxes.value);

        this.formulario.addControl(campo.titulo.split(" ").join("_"), this.formBuilder.array([]));
        break;
      }
      case 'fecha':
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
  }

  public opcionSeleccionada(campo: any,opcion: any, evento: any){
    if(evento.value){
      this.opcionesCheckboxes.setControl(opcion, new FormControl("true"));
      this.guardarOpcion(campo, opcion);
    }else{
      this.opcionesCheckboxes.setControl(opcion, new FormControl("false"));
      this.eliminarOpcion(campo, opcion);      
    }
    console.log(this.opcionesElegidas);
  }

  private guardarOpcion(campo: any, opcion: any){    
    this.opcionesElegidas.push(opcion);
    console.log(this.opcionesElegidas);
    this.formulario.setControl(campo.titulo.split(" ").join("_"), this.formBuilder.array(this.opcionesElegidas));
    console.log(this.formulario.value);
  }

  private eliminarOpcion(campo: any, opcion: any){
    if(this.opcionesElegidas.indexOf(opcion) > -1){
      this.opcionesElegidas.splice(this.opcionesElegidas.indexOf(opcion),1); 
    }
    console.log(this.opcionesElegidas);
    this.formulario.setControl(campo.titulo.split(" ").join("_"), this.formBuilder.array(this.opcionesElegidas));
    console.log(this.formulario.value);
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
  
  public borrarFecha(nombreCampo: string){
    this.formulario.controls[nombreCampo].setValue('');
  }
  
  logForm(){
    if(this.formulario.valid){
      console.log("OK");
      console.log(this.formulario.value);
      this.servicioConector.enviarRespuesta(this.formulario.value).subscribe(datos=>{
        console.log(datos);
      },
      (err)=>{
        console.log(err)
      })

    }else{
      this.showToastError();
      console.log("Los datos no son válidos");
    }
  }

  showToastError() {
    let toast = this.toastCtrl.create({
      message: 'Complete los campos del formulario correctamente',
      duration: 3500,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Ok',

    }); 
    toast.present();
  }
}