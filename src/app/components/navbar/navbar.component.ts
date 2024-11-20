import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,  RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() activeSection!: string;

  toggleMenu:boolean = false;
  scrollService = inject(ScrollService);
  //activeSection: string = 'inicio';
  scrollTo(section: string) {
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.toggleMenu = false; // Cierra el menú después de hacer clic en una opción
    }
  }

  fnShowNavBar() {
    this.toggleMenu = !this.toggleMenu;
  }


setActiveSection(section: string): void {
  this.activeSection = section;
  this.scrollTo(section); // Si ya tienes esta función para desplazarte a la sección
}

// Método para desplazarse a una sección
// scrollTo(sectionId: string) {
//   const section = document.getElementById(sectionId);
//   section?.scrollIntoView({ behavior: 'smooth' });
// }
}
