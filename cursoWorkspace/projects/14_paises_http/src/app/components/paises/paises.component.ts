import { Component } from '@angular/core';
import { PaisesService } from '../../serivce/paises.service';
import { Pais } from '../../model/Pais';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paises',
  imports: [CommonModule, FormsModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})


export class PaisesComponent {
continentes:string[];
continenteSeleccionado:string;
paisesContinente:Pais[];
constructor(private paisesService:PaisesService){
  this.paisesService.continentes()//Observable string
 .subscribe(resultado=>this.continentes=resultado);

}
cargarPaisesContinente():void{
  this.paisesService.paisesContinente(this.continenteSeleccionado)//Observable<Pais[]>
  .subscribe(resultado=>this.paisesContinente=resultado);
}

}
// export class PaisesComponent {
// // necesiamos variables para recoger los paises y el Observable lo poner ahi
// paises:Pais[];
// constructor(private paisesService:PaisesService){

// }
// //metodo de respuesta al evento click del boton ver paises
// verPaises():void{
// this.paisesService.obtenerPaises()// obervable<Paises[]>
// .subscribe(data=>this.paises=data);






