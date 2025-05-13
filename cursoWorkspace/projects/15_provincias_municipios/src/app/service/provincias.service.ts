import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
url:string= "https://www.el-tiempo.net/api/json/v2/provincias/01/municipios"
  constructor(private http: HttpClient) { }
}

//export class PaisesService {
  // url:string= "https://restcountries.com/v2/all";
  // constructor(private http: HttpClient) {}
