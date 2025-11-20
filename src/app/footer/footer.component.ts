import { Component } from '@angular/core';
import { AppearOnScrollDirective } from '../directives/appear-on-scroll.directive';

@Component({
  selector: 'app-footer',
  imports: [AppearOnScrollDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
