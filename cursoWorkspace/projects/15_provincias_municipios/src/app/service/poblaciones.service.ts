import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provincias } from '../model/Provincias';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoblacionesService {
urlProvincias= "https://www.el-tiempo.net/api/json/v2/provincias/01/municipios"
  constructor(private http: HttpClient) { }
}

 constructor(private http:HttpClient) {
   }
  provincias()Observable<Provincia[]>{
    return this.http.get<any>(this.urlProvincias)
    .pipe(map(obj=>obj.provincias));

  }
  municipiosProvincia(cod:number)😮bservable<Municipio[]>{
    const url string=`${this.urlProvincias}/${cod}/municipios`;
    return this.http.get<any>(url)
    .pipe(map(datos=>datos.municipios));
  }




// provincias():Observable<Provincia[]>{
// return this.http.get<any>(this.urlProvincias)
// .pipe(map(obj=>obj.provincias))
// }

// municipiosProvincia(cod:number):Observable<Municipio[]>{

// }







//export class PaisesService {
  // url:string= "https://restcountries.com/v2/all";
  // constructor(private http: HttpClient) {}
