import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  datosFormulario = {};
  usuarios: any;

  url = "http://localhost/ionicPost.php";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: HttpClient) {
      this.recuperarDatos();
  }


  enviarDatos() {
    console.log(this.datosFormulario);
    this.http.post(this.url, JSON.stringify(this.datosFormulario))
    .subscribe(data=>{
      console.log(data);
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
  recuperarDatos(){  
    this.http.get("https://jsonplaceholder.typicode.com/users")
    .subscribe((usuarios) => {
      console.log(usuarios);
      this.usuarios = usuarios;
    }) 
  }
}
