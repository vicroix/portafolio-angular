import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RatonComponent } from './raton/raton.component';
import { MidescripcionComponent } from './midescripcion/midescripcion.component';
import { MishabilidadesComponent } from './mishabilidades/mishabilidades.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RatonComponent, MidescripcionComponent, MishabilidadesComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  bgColorSecciones = 'bg-[#FAF0E6]';
  fontH1 = 'text-3xl font-bold';
  fontH2 = 'text-lg text-[20px] cambio-color-volver';

  title = 'Pagina_angular';
}

