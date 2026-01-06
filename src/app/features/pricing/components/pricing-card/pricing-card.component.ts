import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface PricingFeature {
  label: string;
  value: string;
  icon?: string;
}

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss'
})
export class PricingCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: string = '';
  @Input() pricePeriod: string = '';
  @Input() priceSubtext: string = '';
  @Input() originalPrice: string = '';
  @Input() badge: string = '';
  @Input() proBadge: boolean = false;
  @Input() isPopular: boolean = false;
  @Input() buttonText: string = '';
  @Input() features: PricingFeature[] = [];
  @Input() showIcons: boolean = false;
  @Input() routerLink: string | null = null;
}

