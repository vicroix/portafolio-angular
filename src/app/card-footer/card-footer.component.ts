import { Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-footer',
  imports: [RouterLink],
  templateUrl: './card-footer.component.html',
  styleUrl: './card-footer.component.css'
})
export class CardFooterComponent {
 @Input() id: string = '';
}
