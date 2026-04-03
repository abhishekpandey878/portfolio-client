import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PortfolioProfile } from '../../portfolio.types';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent {
  @Input({ required: true }) profile!: PortfolioProfile;
  @Input() showEditTools = false;
  @Output() editRequested = new EventEmitter<void>();

  encodeEmail(value: string) {
    return encodeURIComponent(value);
  }
}
