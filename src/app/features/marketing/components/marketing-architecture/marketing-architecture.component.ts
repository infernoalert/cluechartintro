import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-marketing-architecture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketing-architecture.component.html',
  styleUrl: './marketing-architecture.component.scss'
})
export class MarketingArchitectureComponent {
  steps: Step[] = [
    {
      icon: 'touch_app',
      title: '1. The Trigger',
      description: 'You input a new variable—e.g., "Shift focus to Gen Z."'
    },
    {
      icon: 'blur_on',
      title: '2. The Ripple',
      description: 'The Orchestrator Agent alerts the Customer Archetype Agent to update the persona and the Competitor Agent to filter for brands targeting Gen Z.'
    },
    {
      icon: 'check_circle',
      title: '3. The Result',
      description: 'A fully revised strategy document is generated in seconds, ensuring every part of your campaign is aligned with the new direction.'
    }
  ];
}

