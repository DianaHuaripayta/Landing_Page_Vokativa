import { CommonModule } from '@angular/common';
import { Component, NgZone, inject } from '@angular/core';
import { WhatsAppService } from '../../../services/whats-app.service';
import { environment } from '../../../../environments/environment.prod';
import { ImagesCorousel } from '../data-json/talleres_data';
import { BehaviorSubject, Subscription, interval, map, timer } from 'rxjs';
import { GalleriaModule } from 'primeng/galleria';
@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css'
})
export class HomeSectionComponent {
  whatsAppService = inject(WhatsAppService);
  lstImages = ImagesCorousel;
  responsiveOptions: any[] | undefined;
  ngOnInit() {
    this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
}
  contactSupport(): void {
    const phoneNumber = '977703980'; // Número en formato internacional
    const message = 'Hola! Por favor quiero mayor información". ¡Espero tu respuesta!';
    this.whatsAppService.redirectToWhatsApp(phoneNumber, message);
  }

}
