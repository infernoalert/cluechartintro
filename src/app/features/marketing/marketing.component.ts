import { Component } from '@angular/core';
import { MarketingHeroComponent } from './components/marketing-hero/marketing-hero.component';
import { MarketingBottleneckComponent } from './components/marketing-bottleneck/marketing-bottleneck.component';
import { MarketingSolutionComponent } from './components/marketing-solution/marketing-solution.component';
import { MarketingArchitectureComponent } from './components/marketing-architecture/marketing-architecture.component';
import { MarketingOutcomeComponent } from './components/marketing-outcome/marketing-outcome.component';
import { MarketingCtaComponent } from './components/marketing-cta/marketing-cta.component';

@Component({
  selector: 'app-marketing',
  standalone: true,
  imports: [
    MarketingHeroComponent,
    MarketingBottleneckComponent,
    MarketingSolutionComponent,
    MarketingArchitectureComponent,
    MarketingOutcomeComponent,
    MarketingCtaComponent
  ],
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.scss'
})
export class MarketingComponent {

}

