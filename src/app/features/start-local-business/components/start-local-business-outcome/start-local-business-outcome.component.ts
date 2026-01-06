import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OutcomeCard {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-start-local-business-outcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-local-business-outcome.component.html',
  styleUrl: './start-local-business-outcome.component.scss'
})
export class StartLocalBusinessOutcomeComponent {
  outcomes: OutcomeCard[] = [
    {
      number: '01',
      title: 'The Perfect Spot',
      description: 'Located in a high-growth zone with optimal rent-to-traffic ratio.'
    },
    {
      number: '02',
      title: 'Data Confidence',
      description: 'Invested in renovation knowing the demographics could support premium pricing.'
    },
    {
      number: '03',
      title: 'Identity',
      description: 'Branding that resonates specifically with the neighborhood archetype.'
    }
  ];
}

