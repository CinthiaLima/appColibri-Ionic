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
  camposFormularioDecode: any[100]=[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private servicioConector: ConectorProvider) {
    let id = navParams.get('id');
    this.titulo = navParams.get('titulo');
    this.descripcion = navParams.get('descripcion');
    this.getCampos(id);

  }

  getCampos(id: number){
    this.servicioConector.recuperarCampos(id).subscribe((campos=>{
     this.camposFormulario = campos;
     this.camposFormulario.forEach(campo => {
      this.camposFormularioDecode.push(this.decodeXtreme(campo));
      document.getElementById("camposForm").innerHTML += this.decodeXtreme(campo);
      console.log("> > > >   " + this.decodeXtreme(campo));
    });
     
    }));
  }
  
  arrayCampos(){
    this.camposFormulario.forEach(campo => {
      this.camposFormularioDecode.push(campo);
    });
  }

  htmlDecode(input: string){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes[0].nodeValue;
  }

  decodeXtreme(input: string) {
    input = input.replace(/&gt;/g,">");
    input = input.replace(/&lt;/g,"<");
    input = input.replace(/&quot;/g,'"');
    input = input.replace(/required="required"/g,'ng-required="true"');

    return input;
  }

  decode(campos: string) {
    console.log("HOLA ME LLAMARON - " + campos);
    return campos.replace(/[<>'"]/g, function(m) {
      return '&' + {
        '\'': 'apos',
        '"': 'quot',
        '&': 'amp',
        '<': 'lt',
        '>': 'gt',
      }[m] + ';';
    });
  }

}
