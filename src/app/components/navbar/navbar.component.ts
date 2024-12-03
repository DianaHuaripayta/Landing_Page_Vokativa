import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() activeSection!: string;
  toggleMenu: boolean = false;
  scrollService = inject(ScrollService);
  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.toggleMenu = false;
    }
  }
  fnShowNavBar() {
    this.toggleMenu = !this.toggleMenu;
  }
  setActiveSection(section: string): void {
    this.activeSection = section;
    this.scrollTo(section);
  }
}
