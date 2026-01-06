import { Component } from '@angular/core';
import { HowItWorksHeroComponent } from './components/how-it-works-hero/how-it-works-hero.component';
import { HowItWorksLogicGapComponent } from './components/how-it-works-logic-gap/how-it-works-logic-gap.component';
import { HowItWorksDataFlowComponent } from './components/how-it-works-data-flow/how-it-works-data-flow.component';
import { HowItWorksExecutionComponent } from './components/how-it-works-execution/how-it-works-execution.component';
import { HowItWorksKnowledgeComponent } from './components/how-it-works-knowledge/how-it-works-knowledge.component';
import { HowItWorksOutputComponent } from './components/how-it-works-output/how-it-works-output.component';
import { HowItWorksCtaComponent } from './components/how-it-works-cta/how-it-works-cta.component';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [
    HowItWorksHeroComponent,
    HowItWorksLogicGapComponent,
    HowItWorksDataFlowComponent,
    HowItWorksExecutionComponent,
    HowItWorksKnowledgeComponent,
    HowItWorksOutputComponent,
    HowItWorksCtaComponent
  ],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {

}

