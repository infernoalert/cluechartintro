import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AgentCard {
  icon: string;
  iconBgClass: string;
  iconTextClass: string;
  backgroundIconClass: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-marketing-solution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketing-solution.component.html',
  styleUrl: './marketing-solution.component.scss'
})
export class MarketingSolutionComponent {
  agents: AgentCard[] = [
    {
      icon: 'travel_explore',
      iconBgClass: 'bg-blue-50 dark:bg-blue-900/20',
      iconTextClass: 'text-primary',
      backgroundIconClass: 'text-primary',
      title: 'The Competitor Agent',
      description: 'Monitors every move your rivals make. Pricing changes, ad copy updates, and new landing pages are flagged instantly.'
    },
    {
      icon: 'face_6',
      iconBgClass: 'bg-purple-50 dark:bg-purple-900/20',
      iconTextClass: 'text-purple-600 dark:text-purple-400',
      backgroundIconClass: 'text-purple-500',
      title: 'Customer Archetype Agent',
      description: 'Simulates your target audience. Ask it questions, test headlines, and get feedback from a persona that never sleeps.'
    },
    {
      icon: 'smart_toy',
      iconBgClass: 'bg-emerald-50 dark:bg-emerald-900/20',
      iconTextClass: 'text-emerald-600 dark:text-emerald-400',
      backgroundIconClass: 'text-emerald-500',
      title: 'The Consultant Agent',
      description: 'Synthesizes data from all other agents to propose strategy pivots. It connects the dots you might miss.'
    }
  ];
}

