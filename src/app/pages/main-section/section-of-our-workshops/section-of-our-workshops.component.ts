import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TALLERES } from '../data-json/talleres_data';
import { WhatsAppService } from '../../../services/whats-app.service';

@Component({
  selector: 'app-section-of-our-workshops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-of-our-workshops.component.html',
  styleUrl: './section-of-our-workshops.component.css'
})
export class SectionOfOurWorkshopsComponent {
  talleres = TALLERES;
  whatsAppService = inject(WhatsAppService);

  contactSupport(): void {
    const phoneNumber = '977703980'; // Número en formato internacional
    const message = 'Hola! Por favor quiero mayor información sobre el "Internship preuniversitario". ¡Espero tu respuesta!';
    this.whatsAppService.redirectToWhatsApp(phoneNumber, message);
  }

}
