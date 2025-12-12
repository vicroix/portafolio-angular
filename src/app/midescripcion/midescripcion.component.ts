import { MishabilidadesComponent } from './../mishabilidades/mishabilidades.component';
import { Component, EventEmitter, Output } from '@angular/core';
import { AppearOnScrollDirective } from "../directives/appear-on-scroll.directive";


@Component({
  selector: 'app-midescripcion',
  imports: [MishabilidadesComponent, AppearOnScrollDirective],
  templateUrl: './midescripcion.component.html',
  styleUrl: './midescripcion.component.css'
})
export class MidescripcionComponent {
@Output() recibidoEventoAppComponent = new EventEmitter<string>();

enviarEventoAppComponent(texto: string){
 this.recibidoEventoAppComponent.emit(texto);
}
}
