import { Injectable } from '@angular/core';
import { Cliente } from './model/cliente';

@Injectable({
  providedIn: 'root'
})

export class ClienteService{
arrayClientes:Cliente[]=[];


validar(usuario:string,password:string):boolean{
 return this.arrayClientes.some(c=>c.usuario==usuario && c.password==password);
}
registrar(c:Cliente):void{
 this.arrayClientes.push(c);
}

}


// export class AgendaService {

//   agenda:Contacto[]=[];
//   guardar(contacto:Contacto):void{
//     this.agenda.push(contacto);
//   }
//   eliminar(posicion:number):void{
//     this.agenda.splice(posicion,1);
//   }
//   recuperar():Contacto[]{
//     return this.agenda;
//   }


// }

