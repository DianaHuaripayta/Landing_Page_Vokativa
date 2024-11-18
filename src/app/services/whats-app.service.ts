import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsAppService {

  constructor() { }
  private whatsappBaseUrl = 'https://wa.me';

  /**
   * Redirige al usuario a un número de WhatsApp con un mensaje predefinido.
   * @param phoneNumber El número de WhatsApp en formato internacional (sin signos ni espacios, solo números).
   * @param message El mensaje que deseas enviar.
   */
  redirectToWhatsApp(phoneNumber: string, message: string): void {
    if (!phoneNumber) {
      console.error('Número de teléfono es requerido');
      return;
    }
    const encodedMessage = encodeURIComponent(message);
    const url = `${this.whatsappBaseUrl}/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }
}
