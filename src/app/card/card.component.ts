import { Component, Input} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() imageSrc: string = '';
  @Input() getTitle: string = 'Título por defecto';
  @Input() id: string = '';
}
