import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PortfolioProfile } from '../../portfolio.types';

@Component({
  selector: 'app-links-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links-section.component.html',
  styleUrls: ['./links-section.component.css']
})
export class LinksSectionComponent {
  @Input({ required: true }) profile!: PortfolioProfile;
  @Input() showEditTools = false;
  @Output() editRequested = new EventEmitter<void>();
}
