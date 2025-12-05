import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackgroundAnimationService {
  constructor() {}

pixel() {
  const bg = document.getElementById("pixel-background");
  if (!bg) return;

  const e = document.createElement("div");
  e.classList.add("pixel");

  // Tamaño aleatorio estilo digital
  const size = Math.random() * 4 + 4;
  e.style.setProperty("--size", `${size}px`);

  // Duración aleatoria
  const duration = Math.random() * 10 + 50;
  e.style.setProperty("--duration", `${duration}s`);

  // Posición horizontal
  e.style.left = Math.random() * window.innerWidth + "px";

  // Siempre empieza desde abajo del viewport
  e.style.top = window.innerHeight + "px";

  bg.appendChild(e);

  setTimeout(() => {
    e.remove();
  }, duration * 1000);
}

}
