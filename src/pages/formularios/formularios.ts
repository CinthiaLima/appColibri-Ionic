import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { ConectorProvider } from '../../providers/conector/conector'
import { VerFormularioPage } from '../ver-formulario/ver-formulario';
import { FormControl } from '@angular/forms/'
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'page-formularios',
  templateUrl: 'formularios.html'
})
export class FormulariosPage {
  formularios : any;
  private formulariosAuxiliar: any;
  public buscandoResultados: boolean = false;
  private nombreABuscar: string = "";
  private controladorBusqueda: FormControl;

  constructor(public navCtrl: NavController,private servicioConector:ConectorProvider, private toastCtrl: ToastController) {
    this.controladorBusqueda = new FormControl();
    this.formulariosAuxiliar = [];
    this.getFormularios();
  }

  ionViewDidLoad() {
    this.controladorBusqueda.valueChanges.debounceTime(300).subscribe(nombreABuscar => {
      this.buscandoResultados = false;
      this.listarResultados();
    });
  }
  
  getFormularios(){
    this.servicioConector.recuperarFormularios().subscribe((datosFormulario)=>{
      this.formularios = datosFormulario;
    },
    (error)=>{
      console.log("E: Se produjo el siguiente error al intentar recuperar los formularios de la base de datos: " + error);
      this.showtoastSinConexion();
    })
  }
  
  verFormulario(id: number, titulo: string, descripcion: string){
    this.navCtrl.push(VerFormularioPage, {id: id, titulo: titulo, descripcion: descripcion});
  }

  listarResultados() {
    if (this.nombreABuscar.trim() === "") {
      this.getFormularios();
    } else {
      this.formularios = this.filtrar();
    }
  }

  private filtrar() {
    this.servicioConector.recuperarFormularios().subscribe((formularios: Response) => 
      this.formulariosAuxiliar = formularios, 
      error => console.log("E: Se produjo el siguiente error al intentar recuperar los formularios de la base de datos: " + error));

    return this.formulariosAuxiliar.filter((formulario) => {
      return formulario.titulo.toLowerCase().indexOf(this.nombreABuscar.toLowerCase()) > -1;
    });
  }

  realizarBusqueda() {
    this.buscandoResultados = true;
  }

  public decodificarEntidades(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  
  private showtoastSinConexion(){
    let toast = this.toastCtrl.create({
      message: 'No se puede conectar con el servidor.',
      duration: 5000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Ok',
    });
    toast.present();
  }
}
