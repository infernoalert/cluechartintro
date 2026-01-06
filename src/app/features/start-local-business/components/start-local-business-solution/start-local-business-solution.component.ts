import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AgentCard {
  icon: string;
  iconBgClass: string;
  iconTextClass: string;
  borderColor: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-start-local-business-solution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-local-business-solution.component.html',
  styleUrl: './start-local-business-solution.component.scss'
})
export class StartLocalBusinessSolutionComponent {
  agents: AgentCard[] = [
    {
      icon: 'map',
      iconBgClass: 'bg-blue-50 dark:bg-blue-900/20',
      iconTextClass: 'text-primary',
      borderColor: 'border-primary',
      title: 'Area Analysis Agent',
      description: 'Scans zoning laws, historical foot traffic patterns, and real-time transit data to build a physical profile of the location.'
    },
    {
      icon: 'storefront',
      iconBgClass: 'bg-indigo-50 dark:bg-indigo-900/20',
      iconTextClass: 'text-indigo-500',
      borderColor: 'border-indigo-500',
      title: 'Competitor Agent',
      description: 'Identifies market gaps by mapping existing businesses and analyzing their reviews to find what customers are missing.'
    },
    {
      icon: 'person_search',
      iconBgClass: 'bg-emerald-50 dark:bg-emerald-900/20',
      iconTextClass: 'text-emerald-500',
      borderColor: 'border-emerald-500',
      title: 'Archetype Agent',
      description: 'Creates a composite profile of the ideal local customer, matching neighborhood spending habits to Sarah\'s business model.'
    }
  ];
}

