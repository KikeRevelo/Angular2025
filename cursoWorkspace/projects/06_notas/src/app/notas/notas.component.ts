import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notas',
  // importamos FormsModule
  imports: [FormsModule],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
      notas:number[]=[];
      nota:number;
      alta:number;
      media:number;
      baja:number;
      aprobados:number=0;

      //METODOS
      guardar():void{
        this.notas.push(this.nota);
      }
      // datos va actualizar las variables
      datos():void{
        this.media=this.calcularMedia();
        this.alta=this.calcularAlta();
        this.baja=this.calcularBaja();
        this.aprobados=this.totalAprobados();

      }

      // estos metodos son para uso interno de los metodos del evento
      // foreach y reduce se puede sacar
      calcularMedia():number{
          let suma:number= this.notas.reduce((a,b)=>a+b);
          return suma/this.notas.length;

      }
      calcularAlta():number{
        let max=this.notas[0];
        this.notas.forEach(n=>{
          if(n>max){
              max=n;
          }
        });
        return max;
      }
      calcularBaja():number{
        let min=this.notas[0];
        this.notas.forEach(n=>{
          if(n<min){
              min=n;
          }
        });
        return min;
      }
      // se puede con filter o con un for of

      totalAprobados(){
      //   let total=0;
      //   this,notas.forEach(n=>{
      //     if(n>=5){
      //       total++;

      //     }
      //   });
      //   return total;
      // }
      // con filter es menos codigo
      return this.notas.filter(n=>n>=5).length

}

}
