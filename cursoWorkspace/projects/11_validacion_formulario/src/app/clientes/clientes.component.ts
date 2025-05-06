import { ClienteService } from './../cliente/cliente_service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente/cliente_service';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})


export class CLienteComponent {
  usuario:string;
  password:string;
  email:string;
  telefono:string;
  // para ahcer visible o no el div que contiene el formulario de regsitro
  visible:boolean=false; // para que no se vea sino cuando se registre


  constructor(private clienteService:ClienteService){

  }
    validar():void{
      const validacion:boolean=this.clienteService.validar(this.usuario,this.password)
          if(validacion){
            alert("Usuario vàlido!!");
                      }else{
                        alert("No estàs registrado!")
                      }
    }
    registrese():void{

    }}



//   guardar(){
//     let contacto=new Contacto(this.nombre,this.email,this.telefono);
//     this.agenda.guardar(contacto);
//   }
//   eliminar(indice:number){
//     this.agenda.eliminar(indice);
//   }
//   mostrar(){
//     this.contactos=this.agenda.recuperar();
//   }
// }
