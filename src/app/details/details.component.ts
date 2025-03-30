import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  imports: [CommonModule, RouterModule, HttpClientModule],
})
export class DetailsComponent implements OnInit {
  @Input() fontH2 = '';
  botonGit1 = 'flex justify-center bg-[rgb(176,62,255)] hover:bg-[rgb(189,95,255)] active:bg-[rgb(166,91,219)] w-35 shadow-sm shadow-gray-500 rounded-xl mt-20';
  botonGit2 = 'flex justify-center bg-[rgb(62,255,175)] hover:bg-[rgb(104,255,193)] active:bg-[rgb(86,226,169)] w-35 shadow-sm shadow-gray-500 rounded-xl mt-5';
  //Cargar objeto de arrays de "public/proyectos.json"
  proyecto: any;

  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log("Id obtenido:", id);
      this.cargarProyecto(id);
    } else console.log("No se encontro el ID");
  }

  cargarProyecto(id: string | null): void {
    this.http.get<any[]>('/assets/proyectos.json').subscribe((proyectos) => {
      this.proyecto = proyectos.find((p) => p.id === id);
    });
  }
}
