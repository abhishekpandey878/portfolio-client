import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PortfolioProfile } from '../../portfolio.types';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent {
  @Input({ required: true }) profile!: PortfolioProfile;
  @Input() showEditTools = false;
  @Output() editRequested = new EventEmitter<void>();
}
