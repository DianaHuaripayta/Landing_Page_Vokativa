import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-our-mentors-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-mentors-section.component.html',
  styleUrl: './our-mentors-section.component.css'
})
export class OurMentorsSectionComponent {
  imagePathFirst = `${environment.assetsBasePath}paola.jpeg`;
  imagePathSecond = `${environment.assetsBasePath}diana.jpeg`;

}
