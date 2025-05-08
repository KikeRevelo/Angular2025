import { FormsModule } from '@angular/forms';
import { ClienteService } from './../../../../../11_validacion_formulario/src/app/cliente/cliente_service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-validacion',
  imports: [FormsModule],
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.css'
})
export class ValidacionComponent {
  usuario:string;
  password:string;
  constructor( private clienteService:ClienteService){

  }
  validar(){
    let respuesta=this.clienteService.validar(this.usuario,this.password);
    if(respuesta){
      alert("Usuario valido!!");
    }else{
      alert("No està registrado")
    }
  }

}
