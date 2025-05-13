import { Component } from '@angular/core';
import { PaisesService } from '../../serivce/paises.service';
import { Pais } from '../../model/Pais';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paises',
  imports: [CommonModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
// necesiamos variables para recoger los paises y el Observable lo poner ahi
paises:Pais[];
constructor(private paisesService:PaisesService){

}
//metodo de respuesta al evento click del boton ver paises
verPaises():void{
this.paisesService.obtenerPaises()// obervable<Paises[]>
.subscribe(data=>this.paises=data);
}
}
