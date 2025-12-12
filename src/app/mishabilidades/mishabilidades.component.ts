import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mishabilidades',
  imports: [],
  templateUrl: './mishabilidades.component.html',
  styleUrl: './mishabilidades.component.css'
})
export class MishabilidadesComponent {
  @Output() textoSkillsSeleccionado = new EventEmitter<string>();

  enviarTechApp(event: Event){
    const texto = (event.target as HTMLElement).innerText;
    this.textoSkillsSeleccionado.emit(texto);
  }
}


