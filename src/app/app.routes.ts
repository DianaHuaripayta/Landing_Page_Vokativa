import { Routes } from '@angular/router';
import { HomeSectionComponent } from './pages/main-section/home-section/home-section.component';
import { SectionOfOurWorkshopsComponent } from './pages/main-section/section-of-our-workshops/section-of-our-workshops.component';
import { OurMentorsSectionComponent } from './pages/main-section/our-mentors-section/our-mentors-section.component';
import { TestimonialsSectionComponent } from './pages/main-section/testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from './pages/main-section/contact-section/contact-section.component';

export const routes: Routes = [
  { path: '', component: HomeSectionComponent }, // Página principal
  { path: 'talleres', component: SectionOfOurWorkshopsComponent },
  { path: 'mentores', component: OurMentorsSectionComponent },
  { path: 'testimonios', component: TestimonialsSectionComponent },
  { path: 'contacto', component: ContactSectionComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Manejo de rutas no encontradas
];
