import { AgendaService } from './../../../../../12_validadion_routing/src/app/cliente_service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar',
  imports: [],
  templateUrl: './mostrar.component.html',
  styleUrl: './mostrar.component.css'
})
export class MostrarComponent {
 // variable que guarda los contactos que dbeen visualizarce  en ñla tabla
 constructor(private AgendaService:AgendaService){
      this.contacto=this.AgendaService.recuperar();
 }
 elimininar(posicion:number):void{
  this.AgendaService.eliminar(posicion);
  // this.contacto=this.agenda
 }
}
