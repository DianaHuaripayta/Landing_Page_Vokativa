import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WhatsAppService } from '../../../services/whats-app.service';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css'
})
export class HomeSectionComponent {
  whatsAppService = inject(WhatsAppService);

  contactSupport(): void {
    const phoneNumber = '977703980'; // Número en formato internacional
    const message = 'Hola! Por favor quiero mayor información sobre el "Internship preuniversitario". ¡Espero tu respuesta!';
    this.whatsAppService.redirectToWhatsApp(phoneNumber, message);
  }

}
