import { MishabilidadesComponent } from './../mishabilidades/mishabilidades.component';
import { Component } from '@angular/core';
import { AppearOnScrollDirective } from "../directives/appear-on-scroll.directive";


@Component({
  selector: 'app-midescripcion',
  imports: [MishabilidadesComponent, AppearOnScrollDirective],
  templateUrl: './midescripcion.component.html',
  styleUrl: './midescripcion.component.css'
})
export class MidescripcionComponent {

}
