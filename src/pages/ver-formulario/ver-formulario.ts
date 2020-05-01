import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConectorProvider } from '../../providers/conector/conector';
import { FormGroup, Validators, FormControl, ValidationErrors} from '@angular/forms';
import { FormBuilder } from '@angular/forms/'
import { ToastController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

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


  constructor(public navCtrl: NavController, public navParams: NavParams, private servicioConector: ConectorProvider, private formBuilder: FormBuilder, private toastCtrl: ToastController, public viewCtrl: ViewController){
    
    let id = navParams.get('id');
    this.titulo = navParams.get('titulo');
    this.descripcion = navParams.get('descripcion');
    this.getCampos(id);
    this.formulario = this.formBuilder.group({ });
    this.formulario.addControl('idFormulario', new FormControl(''));
//    this.formulario.controls.get['idFormulario'].setValue("");
    this.formulario.patchValue({idFormulario: id});
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
      case 'lista_checkbox':
      {
        //Inicialización de las opciones de la lista_checkbox
        this.opcionesCheckboxes = this.formBuilder.group({});
        campo.opciones.forEach((opcion: any) =>{
          this.opcionesCheckboxes.addControl(opcion, new FormControl('false'));
        })

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
  }

  private guardarOpcion(campo: any, opcion: any){    
    this.opcionesElegidas.push(opcion);
    this.formulario.setControl(campo.titulo.split(" ").join("_"), this.formBuilder.array(this.opcionesElegidas));
  }

  private eliminarOpcion(campo: any, opcion: any){
    if(this.opcionesElegidas.indexOf(opcion) > -1){
      this.opcionesElegidas.splice(this.opcionesElegidas.indexOf(opcion),1); 
    }
    this.formulario.setControl(campo.titulo.split(" ").join("_"), this.formBuilder.array(this.opcionesElegidas));
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
        let mensajeErrorMail = {"tipo": "pattern", "mensaje": "Escriba el mail en el formato ejemplo@aaaaa.com"};
        mensajesError = [mensajeErrorMail];
        validaciones = [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")];     
        if(campoTexto.esObligatorio == 'true'){
          validaciones = [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.required];
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
    Object.keys(this.formulario.controls).forEach(key => {

      const controlErrors: ValidationErrors = this.formulario.get(key).errors;
      if (controlErrors != null) {
            Object.keys(controlErrors).forEach(keyError => {
              console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
            });
          }
        });
      
   // if(this.formulario.hasError){
     // console.log("errores");
    //}
    if(this.formulario.valid){
      console.log("OK");
      console.log(this.formulario.value);
      this.servicioConector.enviarRespuesta(this.formulario.value).subscribe(datos=>{
        console.log(datos);
      },
      (err)=>{
        console.log(err)
      })
      this.toastExitoFormulario();
//      this.navCtrl.remove(this.viewCtrl.index - 2, 3); 
      this.navCtrl.popToRoot();
     // this.navCtrl.push(VerFormularioPage).then(() => {
       // const index = this.viewCtrl.index-1;
        //this.navCtrl.remove(index);
 // });
     
    }else{
      this.toastErrorFormulario();
      console.log(this.formulario.errors);
      
      console.log("Los datos no son válidos");
    }
  }

  toastErrorFormulario() {
    let toast = this.toastCtrl.create({
      message: 'Complete los campos del formulario correctamente',
      duration: 3500,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Ok',

    }); 
    toast.present();
  }

  toastExitoFormulario() {
    let toast = this.toastCtrl.create({
      message: 'Gracias. Su respuesta fue enviada con éxito',
      duration: 5000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Ok',
    });
    toast.present();
  }
}