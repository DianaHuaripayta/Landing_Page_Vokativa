import { CommonModule } from '@angular/common';
import { Component, NgZone, inject } from '@angular/core';
import { WhatsAppService } from '../../../services/whats-app.service';
import { environment } from '../../../../environments/environment.prod';

import { GalleriaModule } from 'primeng/galleria';
@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css',
  
})
export class HomeSectionComponent {
  whatsAppService = inject(WhatsAppService);
  responsiveOptions: any[] | undefined;
  isMobile: boolean = false; // Bandera para indicar si es móvil.
  ngOnInit() {
    this.responsiveOptions = [
      { breakpoint: '1024px', numVisible: 5 },
      { breakpoint: '768px', numVisible: 3 },
      { breakpoint: '560px', numVisible: 1 }
    ];
  
  }

  contactSupport(): void {
    // const phoneNumber = '977703980'; // Número en formato internacional
    // const message = 'Hola! Por favor quiero mayor información". ¡Espero tu respuesta!';
    // this.whatsAppService.redirectToWhatsApp(phoneNumber, message);
    window.open('https://forms.gle/P4GSj8bb3KBZwK7j9', '_blank');

  }


}
