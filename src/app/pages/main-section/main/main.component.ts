import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HomeSectionComponent } from '../home-section/home-section.component';
import { OurMentorsSectionComponent } from '../our-mentors-section/our-mentors-section.component';
import { SectionOfOurWorkshopsComponent } from '../section-of-our-workshops/section-of-our-workshops.component';
import { TestimonialsSectionComponent } from '../testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { WhatsAppService } from '../../../services/whats-app.service';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    HomeSectionComponent,
    SectionOfOurWorkshopsComponent,
    OurMentorsSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  whatsAppService = inject(WhatsAppService);
  imagePath = `${environment.assetsBasePath}WhatsApp1.svg.png`;
  contactSupport(): void {
    const phoneNumber = '977703980'; // Número en formato internacional
    const message = 'Hola! Por favor quiero mayor información sobre el "Internship preuniversitario". ¡Espero tu respuesta!';
    this.whatsAppService.redirectToWhatsApp(phoneNumber, message);
  }

}
