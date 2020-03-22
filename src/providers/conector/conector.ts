import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConectorProvider {

  host: string = "http://localhost/";
  formularios: string = "recuperar.formularios.php";
  formulario: string = "recuperar.formulario.php";
 campos: string = "recuperar.campos.php";

  //host: string = "http://172.16.8.16/ionic/recuperar.formularios.php";

  constructor(public http: HttpClient) {
    console.log('Conexión a la base de datos establecida.');
  }

  recuperarFormularios(){
    return this.http.get(this.host + this.formularios);
  }

}
