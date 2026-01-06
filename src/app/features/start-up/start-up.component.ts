import { Component } from '@angular/core';
import { StartUpHeroComponent } from './components/start-up-hero/start-up-hero.component';
import { StartUpFrustrationComponent } from './components/start-up-frustration/start-up-frustration.component';
import { StartUpSolutionComponent } from './components/start-up-solution/start-up-solution.component';
import { StartUpArchitectureComponent } from './components/start-up-architecture/start-up-architecture.component';
import { StartUpOutcomeComponent } from './components/start-up-outcome/start-up-outcome.component';
import { StartUpCtaComponent } from './components/start-up-cta/start-up-cta.component';

@Component({
  selector: 'app-start-up',
  standalone: true,
  imports: [
    StartUpHeroComponent,
    StartUpFrustrationComponent,
    StartUpSolutionComponent,
    StartUpArchitectureComponent,
    StartUpOutcomeComponent,
    StartUpCtaComponent
  ],
  templateUrl: './start-up.component.html',
  styleUrl: './start-up.component.scss'
})
export class StartUpComponent {

}

