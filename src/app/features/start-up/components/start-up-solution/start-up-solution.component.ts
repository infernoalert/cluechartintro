import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AgentCard {
  icon: string;
  iconBgClass: string;
  iconTextClass: string;
  title: string;
  role: string;
  quote: string;
  quoteBorderColor: string;
  description: string;
}

@Component({
  selector: 'app-start-up-solution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-up-solution.component.html',
  styleUrl: './start-up-solution.component.scss'
})
export class StartUpSolutionComponent {
  agents: AgentCard[] = [
    {
      icon: 'support_agent',
      iconBgClass: 'bg-blue-100 dark:bg-blue-900/30',
      iconTextClass: 'text-primary',
      title: 'The Consultant Agent',
      role: 'STRATEGY',
      quote: 'I don\'t know where to start with this market analysis.',
      quoteBorderColor: 'border-primary',
      description: 'Breaks down complex goals into actionable steps, suggests frameworks, and initiates the research process automatically.'
    },
    {
      icon: 'rule',
      iconBgClass: 'bg-purple-100 dark:bg-purple-900/30',
      iconTextClass: 'text-purple-600 dark:text-purple-400',
      title: 'The Consistency Engine',
      role: 'QUALITY ASSURANCE',
      quote: 'Does this financial projection match our user growth slide?',
      quoteBorderColor: 'border-purple-500',
      description: 'Continuously validates outputs across documents. If one agent changes a number, this engine ensures it ripples correctly through your entire project.'
    }
  ];
}

