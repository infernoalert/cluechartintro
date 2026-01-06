import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OutcomeCard {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-start-up-outcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-up-outcome.component.html',
  styleUrl: './start-up-outcome.component.scss'
})
export class StartUpOutcomeComponent {
  outcomes: OutcomeCard[] = [
    {
      icon: 'view_list',
      title: 'Structured Outputs',
      description: 'No more walls of text. Get tables, diagrams, JSON, and formatted documents ready for presentation.'
    },
    {
      icon: 'security',
      title: 'Private Data Integration',
      description: 'Your proprietary data stays secure within your instance. Agents reference it without training public models.'
    },
    {
      icon: 'center_focus_strong',
      title: 'Focus',
      description: 'Frank spends his time on high-level strategy and key decisions, leaving the execution details to his agent swarm.'
    }
  ];
}

