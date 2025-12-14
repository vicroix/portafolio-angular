import { Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MidescripcionComponent } from './midescripcion/midescripcion.component';
import { CommonModule } from '@angular/common';
import { AppearOnScrollDirective } from './directives/appear-on-scroll.directive';
import { AbrirModalImgService } from './abrir-modal-img.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MidescripcionComponent,
    CommonModule,
    AppearOnScrollDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  modalVisible = false;
  constructor(private recibirRutasImgServ: AbrirModalImgService) {
    this.recibirRutasImgServ.data$.subscribe((rutas) => {
      this.rutasImgModal = rutas;
      const contenedor = document.getElementById('content-modal-img');
      (document.querySelector('html') as HTMLElement).style.overflow = 'hidden';
      setTimeout(() => {
        this.modalVisible = true;
        document.documentElement.style.overflow = 'hidden';
      }, 150);
    });
  }
  fontH1 = 'text-3xl font-bold';
  fontH2 = 'text-lg text-[20px] cambio-color-volver';
  title = 'Pagina_angular';
  description = '';
  rutasImgModal: string[] = [];
  imagenActualIndex: number = 0;
  abierto = false;

  // Abre un modal para definir las tecnologias en mi descripción
  abrirModal(texto: string) {
   switch (texto) {
  case 'Angular':
    this.description =
      'Angular es un framework que te ayuda a crear aplicaciones web grandes y bien organizadas. Está pensado para proyectos serios y escalables, usando componentes y TypeScript para mantener el código ordenado y fácil de mantener a largo plazo.';
    break;

  case 'Node.js':
    this.description =
      'Node.js permite ejecutar JavaScript fuera del navegador, normalmente en el servidor. Gracias a esto puedes crear backends, APIs o servicios completos usando el mismo lenguaje que en el frontend.';
    break;

  case 'Express.js':
    this.description =
      'Express.js es un framework que se usa junto a Node.js para crear servidores y APIs de forma rápida y sencilla. Se encarga de gestionar rutas, peticiones HTTP y middleware, quitándote mucho trabajo repetitivo.';
    break;

  case 'TypeScript':
    this.description =
      'TypeScript es JavaScript con superpoderes. Añade tipos para ayudarte a detectar errores antes de ejecutar la aplicación, algo especialmente útil cuando el proyecto crece y el código se vuelve más complejo.';
    break;

  case 'JavaScript':
    this.description =
      'JavaScript es el lenguaje que da vida a las páginas web. Se encarga de la lógica y la interacción, permitiendo desde animaciones y formularios hasta aplicaciones completas tanto en frontend como en backend.';
    break;

  case 'TailwindCSS':
    this.description =
      'Tailwind CSS es un framework que te permite diseñar directamente desde el HTML usando clases pequeñas y reutilizables. Es muy flexible y te da control total sobre el diseño sin depender de componentes prefabricados.';
    break;

  case 'Bootstrap':
    this.description =
      'Bootstrap es un framework que facilita crear interfaces responsive rápidamente, ofreciendo componentes listos para usar como botones, formularios y menús, además de un sistema de rejilla para organizar el diseño.';
    break;

  case 'MySQL':
    this.description =
      'MySQL es una base de datos relacional muy utilizada para guardar y gestionar información de aplicaciones. Organiza los datos en tablas y permite consultarlos fácilmente mediante SQL.';
    break;

  case 'PHP':
    this.description =
      'PHP es un lenguaje pensado para el desarrollo web en el servidor. Se usa mucho para generar páginas dinámicas y conectar aplicaciones con bases de datos de forma sencilla.';
    break;

  default:
    this.description = '';
    break;
}

    // Hago aparecer el modal del contenedor y el contenido
    const containerTechDescription = document.getElementById(
      'container-tech-description'
    );
    const contentTechDescription = document.getElementById(
      'content-tech-description'
    );
    containerTechDescription!.style.display = 'flex';
    containerTechDescription!.classList.add('modal-background');
    (document.querySelector('html') as HTMLElement).style.overflow = 'hidden';
    setTimeout(() => {
      contentTechDescription!.classList.add('show');
    }, 125);
  }
  // Cierra el modal
  cerrarModal() {
    const containerTechDescription = document.getElementById(
      'container-tech-description'
    );
    const contentTechDescription = document.getElementById(
      'content-tech-description'
    );
    const containerAppDescripcion = document.getElementById(
      'container-app-midescripcion'
    );
    contentTechDescription!.classList.remove('show');
    setTimeout(() => {
      (document.querySelector('html') as HTMLElement).style.overflow = '';
      containerTechDescription!.style.display = 'none';
      containerAppDescripcion!.classList.remove('modal-background');
    }, 300);
  }

  siguiente() {
    if (this.rutasImgModal.length === 0) return;
    this.imagenActualIndex =
      (this.imagenActualIndex + 1) % this.rutasImgModal.length;
  }

  anterior() {
    if (this.rutasImgModal.length === 0) return;
    this.imagenActualIndex =
      (this.imagenActualIndex - 1 + this.rutasImgModal.length) %
      this.rutasImgModal.length;
  }

  cerrarModalImg() {
    this.modalVisible = false;

    setTimeout(() => {
      this.rutasImgModal = [];
      document.documentElement.style.overflow = '';
    }, 125);
  }
}
