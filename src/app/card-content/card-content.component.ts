import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  imports: [],
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent {
@Input() descripcion: string = '';
@Input() getTitle: string = '';
}
