import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pais } from '../model/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  url:string= "https://restcountries.com/v2/all";
  constructor(private http: HttpClient) {}


obtenerPaises():Observable<Pais[]>{
  // este deveivle un array de pais
  return this.http.get<Pais[]>(this.url);
}
//metodo que devuelve un Observable de un Array de string (nombre de continentes)
continentes():Observable<string[]>{
  return this.http.get<Pais[]>(this.url)// Observable<Pais>
  .pipe(map(paises=>[...new Set(paises.map(p=>p.region))])); //Oberservable<string>

}
paisesContinente(continente:string):Observable<Pais[]>{
  return this.http.get<Pais[]>(this.url)
  .pipe(map(paises=>paises.filter(p=>p.region==continente)));
}


}
//paisesContinente(continente😒tring)😮bservable<Pais[]>{
//   return this.http.get<Pais[]>(this.url) //Observable<Pais[]>
//   .pipe(map(paises=>paises.filter(p=>p.region==continente)));
// }

