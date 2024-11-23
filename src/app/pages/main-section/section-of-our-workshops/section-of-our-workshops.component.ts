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
  talleres:any = [];
  whatsAppService = inject(WhatsAppService);
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.talleres = TALLERES;
  }
  contactSupport(where :string): void {
    // const phoneNumber = '977703980'; // Número en formato internacional
    // const message = `Hola! Por favor quiero mayor información sobre el ${where}. ¡Espero tu respuesta!`;
    // this.whatsAppService.redirectToWhatsApp(phoneNumber, message);
    window.open('https://forms.gle/P4GSj8bb3KBZwK7j9', '_blank');

  }

}
