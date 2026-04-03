import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PortfolioProfile } from '../../portfolio.types';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent {
  @Input({ required: true }) profile!: PortfolioProfile;
  @Input() showEditTools = false;
  @Output() editRequested = new EventEmitter<void>();

  getExperienceBulletPoints(description: string) {
    return description
      .split('\n')
      .map((item) => item.replace(/^[\-\u2022]\s*/, '').trim())
      .filter(Boolean);
  }
}
