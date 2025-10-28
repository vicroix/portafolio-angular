import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  card = "flex flex-col flex-grow overflow-hidden shadow-md transition-all bg-amber-300 duration-300 hover:shadow-lg hover:-translate-y-1";
}
