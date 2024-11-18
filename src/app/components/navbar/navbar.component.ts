import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggleMenu:boolean = false;
  scrollService = inject(ScrollService);

  scrollTo(section: string): void {
    this.scrollService.scrollToElement(section);
  }
}
