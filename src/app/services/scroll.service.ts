import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  /**
   * Desplaza suavemente hacia un elemento con el ID especificado.
   * @param elementId El ID del elemento al que quieres desplazarte.
   */
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error(`Elemento con ID "${elementId}" no encontrado.`);
    }
  }
}
