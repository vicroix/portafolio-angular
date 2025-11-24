import { CommonModule } from '@angular/common';
import { Component, Directive, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardFooterComponent } from '../card-footer/card-footer.component';
import { CardContentComponent } from '../card-content/card-content.component';
import { AppearOnScrollDirective } from '../directives/appear-on-scroll.directive';

@Component({
  selector: 'app-card',
  imports: [
    RouterModule,
    CommonModule,
    CardFooterComponent,
    CardContentComponent,
    AppearOnScrollDirective,
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() imageSrc: string = '';
  @Input() getTitle: string = 'Título por defecto';
  @Input() id: string = '';
  @Input() descripcion: string = '';
  @Input() href: string = '';
  botones =
    'py-1 px-2 rounded-xl m-4 p-2 bg-[rgb(176,62,255)] hover:bg-[rgb(189,95,255)] active:bg-[rgb(166,91,219)]  text-white font-medium';
}
