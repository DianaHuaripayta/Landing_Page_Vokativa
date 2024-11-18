import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SuccessfulExperiencesBannerComponent } from '../../../components/successful-experiences-banner/successful-experiences-banner.component';
import { TestimonialsBannerComponent } from '../../../components/testimonials-banner/testimonials-banner.component';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [
    CommonModule,
    SuccessfulExperiencesBannerComponent,
    TestimonialsBannerComponent,
  ],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css'],
})
export class TestimonialsSectionComponent {
  banners = [
    { component: 'successful' },
    { component: 'testimonials' },
  ];
  activeIndex = 0;

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.banners.length;
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.banners.length) % this.banners.length;
  }
}