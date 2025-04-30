import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  imports: [],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
      notas:number[]=[];
      nota:number;
      alta:number;
      media:number;
      bajo:number;
      aprobado:number;

      //METODOS
      guardar():void{
        this.notas.push(this.nota);
      }
}


