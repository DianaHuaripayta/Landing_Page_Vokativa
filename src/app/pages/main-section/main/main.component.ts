import { Component, HostListener, inject } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HomeSectionComponent } from '../home-section/home-section.component';
import { OurMentorsSectionComponent } from '../our-mentors-section/our-mentors-section.component';
import { SectionOfOurWorkshopsComponent } from '../section-of-our-workshops/section-of-our-workshops.component';
import { TestimonialsSectionComponent } from '../testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { WhatsAppService } from '../../../services/whats-app.service';
import { environment } from '../../../../environments/environment.prod';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    RouterOutlet,
    HomeSectionComponent,
    SectionOfOurWorkshopsComponent,
    OurMentorsSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
    FooterComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {

  // whatsAppService = inject(WhatsAppService);
  imagePath = `${environment.assetsBasePath}WhatsApp1.svg.png`;
  activeSection: string = 'inicio'; // Sección activa inicial
  constructor(private whatsAppService: WhatsAppService) {}


  contactSupport(): void {
    // Ejemplo de uso correcto del servicio
    const message = 'Hola! Por favor quiero mayor información. ¡Espero tu respuesta!';
    this.whatsAppService.redirectToWhatsApp('977703980', message);
  }
}
