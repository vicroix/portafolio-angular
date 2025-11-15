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
  botonGit1 = 'flex gap-3 enlace-git justify-center items-center bg-[rgb(176,62,255)] text-white hover:bg-[rgb(189,95,255)] cursor-pointer active:bg-[rgb(166,91,219)] w-35 py-2 shadow-sm shadow-gray-500 rounded-xl';
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

    // Aquí ya existe this.proyecto
    if (this.proyecto?.imagen?.length === 1) {
      const arrowCaruselLeft = document.getElementById("arrowCaruselLeft");
      arrowCaruselLeft?.classList.add("hidden");

      const arrowCaruselRight = document.getElementById("arrowCaruselRight");
      arrowCaruselRight?.classList.add("hidden");
    }
  });
}


  indiceActual = 0;

anterior() {
  if (!this.proyecto?.imagen) return;
  this.indiceActual =
    (this.indiceActual - 1 + this.proyecto.imagen.length) %
    this.proyecto.imagen.length;
}

siguiente() {
  if (!this.proyecto?.imagen) return;
  this.indiceActual = (this.indiceActual + 1) % this.proyecto.imagen.length;
}

}
