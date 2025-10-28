import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() imageSrc: string = '';
  @Input() getTitle: string = 'Título por defecto';
  @Input() id: string = '';
  @Input() descripcion: string = '';
  botones = 'py-1 px-2 rounded-xl m-4 p-2 bg-[rgb(176,62,255)] hover:bg-[rgb(189,95,255)] active:bg-[rgb(166,91,219)]  text-white font-medium';
}
