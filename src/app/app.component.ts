import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MidescripcionComponent } from './midescripcion/midescripcion.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { AppearOnScrollDirective } from './directives/appear-on-scroll.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MidescripcionComponent,FooterComponent, CommonModule, AppearOnScrollDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  fontH1 = 'text-3xl font-bold';
  fontH2 = 'text-lg text-[20px] cambio-color-volver';
  title = 'Pagina_angular'

}

