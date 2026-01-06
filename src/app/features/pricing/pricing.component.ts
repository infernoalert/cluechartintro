import { Component } from '@angular/core';
import { PricingHeroComponent } from './components/pricing-hero/pricing-hero.component';
import { PricingEnterpriseComponent } from './components/pricing-enterprise/pricing-enterprise.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    PricingHeroComponent,
    PricingEnterpriseComponent
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

}

