import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WhatsAppService } from '../../../services/whats-app.service';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css'
})
export class HomeSectionComponent {
  whatsAppService = inject(WhatsAppService);
  imagePath = `${environment.assetsBasePath}1-img.png`;
  contactSupport(): void {
    const phoneNumber = '977703980'; // Número en formato internacional
    const message = 'Hola! Por favor quiero mayor información sobre el "Internship preuniversitario". ¡Espero tu respuesta!';
    this.whatsAppService.redirectToWhatsApp(phoneNumber, message);
  }

}
