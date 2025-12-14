import { Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MidescripcionComponent } from './midescripcion/midescripcion.component';
import { CommonModule } from '@angular/common';
import { AppearOnScrollDirective } from './directives/appear-on-scroll.directive';
import { AbrirModalImgService } from './abrir-modal-img.service';
import { timeout } from 'rxjs';

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
      });
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
          'Angular es una plataforma y framework de código abierto, mantenido por Google, para construir aplicaciones web modernas y escalables, especialmente Aplicaciones de una sola Página (SPA), utilizando HTML, CSS y TypeScript, destacando por su arquitectura basada en componentes, enlace de datos y un robusto conjunto de herramientas para el desarrollo frontend profesional.';
        break;
      case 'Node.js':
        this.description =
          'Node.js es un entorno de ejecución de JavaScript de código abierto y multiplataforma que permite ejecutar código JavaScript fuera del navegador.';
        break;
      case 'Express.js':
        this.description =
          'Express.js es un framework minimalista y flexible para Node.js que simplifica la creación de aplicaciones web y APIs robustas, ofreciendo un sistema de enrutamiento potente, manejo de middleware, gestión de peticiones HTTP (GET, POST, etc.), integración con motores de plantillas y manejo de errores, actuando como una capa de abstracción que acelera el desarrollo al encargarse de tareas comunes.';
        break;
      case 'TypeScript':
        this.description =
          'TypeScript (TS) es un lenguaje de programación de código abierto de Microsoft que es un superconjunto de JavaScript, añadiendo tipado estático opcional para facilitar el desarrollo de aplicaciones grandes y complejas, detectando errores antes de la ejecución y mejorando la organización del código, y que se compila (transpila) a JavaScript puro para que funcione en cualquier entorno, desde navegadores hasta Node.js.';
        break;
      case 'JavaScript':
        this.description =
          'JavaScript (JS) es un lenguaje de programación fundamental en la web que añade interactividad y dinamismo a las páginas, trabajando junto a HTML (estructura) y CSS (estilo) para crear sitios web y aplicaciones ricas y funcionales, desde formularios y galerías hasta juegos y aplicaciones del lado del servidor (Node.js).';
        break;
      case 'TailwindCSS':
        this.description =
          'Tailwind CSS es un framework CSS que proporciona clases predefinidas de bajo nivel directamente en tu HTML, permitiéndote construir interfaces personalizadas rápidamente sin escribir CSS desde cero, a diferencia de frameworks como Bootstrap que ofrecen componentes completos.';
        break;
      case 'Bootstrap':
        this.description =
          'Bootstrap es un framework gratuito y de código abierto para desarrollo web, que combina HTML, CSS y JavaScript para crear sitios web y aplicaciones responsive (adaptables a cualquier dispositivo) de forma rápida y eficiente, ofreciendo componentes preconstruidos como botones, menús y formularios, y un sistema de rejilla para diseños flexibles.';
        break;
      case 'MySQL':
        this.description =
          'MySQL es un Sistema de Gestión de Bases de Datos Relacionales (RDBMS) de código abierto, muy popular y usado mundialmente, que permite a usuarios y aplicaciones almacenar, gestionar y recuperar datos organizados en tablas (con filas y columnas) utilizando el lenguaje SQL.';
        break;
      case 'PHP':
        this.description =
          'PHP (PHP: Hypertext Preprocessor) es un lenguaje de programación de código abierto, de scripting y del lado del servidor, ideal para desarrollo web, que permite crear páginas y aplicaciones web dinámicas al integrarse con HTML y interactuar con bases de datos.';
        break;
      default:
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
    }, 300);
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
    }, 300);
  }
}
