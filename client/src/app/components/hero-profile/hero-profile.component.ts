import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PortfolioProfile } from '../../portfolio.types';

@Component({
  selector: 'app-hero-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent {
  @Input({ required: true }) profile!: PortfolioProfile;
  @Input() animatedHeadline = '';
  @Input() animatedSummary = '';
  @Input() isSummaryVisible = false;
  @Input() showEditTools = false;
  @Output() editRequested = new EventEmitter<void>();
}
