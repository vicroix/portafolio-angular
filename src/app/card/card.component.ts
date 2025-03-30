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
  botones = 'py-2 px-4 rounded-xl p-2 shadow-sm shadow-gray-500 m-4 w-45 bg-[rgb(176,62,255)] hover:bg-[rgb(189,95,255)] active:bg-[rgb(166,91,219)]  text-white font-medium';
}
