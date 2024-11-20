import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  pathImg :string = environment.assetsBasePath;
  setActiveSection(section: string): void {
    this.scrollTo(section); // Si ya tienes esta función para desplazarte a la sección
  }
  scrollTo(section: string) {
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
