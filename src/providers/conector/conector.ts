import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import 'rxjs/add/operator/map';


@Injectable()
export class ConectorProvider {

  host: string = "http://localhost/ionic/";
  //host: string = "http://172.16.8.16/ionic/";
  private llave: string = "8c8b6c186ad4940044533c4303a0ab5c";

  constructor(public http: HttpClient) {
    console.log('Conexión a la base de datos establecida.');
  }

  private obtenerFechaCodificada(){
    let fecha: Date = new Date();
    let dia: string;
    let mes: string;
    let anio: string = ""+fecha.getFullYear();

    if (fecha.getDate() < 10) {
      dia = "0" + fecha.getDate();
    } else {
      dia = "" + fecha.getDate();
    }

    if(fecha.getMonth() < 10){
      mes = "0"+(fecha.getMonth()+1);
    }else{
      mes = ""+(fecha.getMonth()+1);
    }
    return Md5.hashStr(dia+mes+anio);
  }

  recuperarFormularios(){
    return this.http.get(this.host + "recuperar.formularios.php" + 
    "?llave=" + this.llave + this.obtenerFechaCodificada());
  }

  recuperarCampos(id: number){
    return this.http.get(this.host + "recuperar.campos_alternativo.php?id="+ id + 
    "&llave=" + this.llave + this.obtenerFechaCodificada());  
  }

  enviarRespuesta(respuesta:any){
    return this.http.post(this.host + "ionicPost.php", JSON.stringify(respuesta));
  }

}
