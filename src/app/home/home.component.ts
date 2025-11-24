import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cartas: any;

  card = "flex flex-col flex-grow overflow-hidden shadow-md transition-all bg-amber-300 duration-300 hover:shadow-lg hover:-translate-y-1";

  ngOnInit(): void {
  this.cargarCartas();
}

  constructor(private http: HttpClient){}


  cargarCartas(): void{
    this.http.get<any[]>('/assets/cartaProyectos.json').subscribe((cartas)=>{
      this.cartas = cartas;
      console.log("cartas", cartas);
    })
    }
}

