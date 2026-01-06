import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProblemCard {
  icon: string;
  iconBgClass: string;
  iconTextClass: string;
  title: string;
  description: string;
  hasBorder?: boolean;
}

@Component({
  selector: 'app-start-local-business-problem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-local-business-problem.component.html',
  styleUrl: './start-local-business-problem.component.scss'
})
export class StartLocalBusinessProblemComponent {
  cards: ProblemCard[] = [
    {
      icon: 'foggy',
      iconBgClass: 'bg-orange-100 dark:bg-orange-900/30',
      iconTextClass: 'text-orange-600 dark:text-orange-400',
      title: 'The Neighborhood Fog',
      description: 'Local vibes aren\'t on spreadsheets. Sarah can\'t see the nuances of foot traffic or community sentiment just by driving by.'
    },
    {
      icon: 'visibility_off',
      iconBgClass: 'bg-red-100 dark:bg-red-900/30',
      iconTextClass: 'text-red-600 dark:text-red-400',
      title: 'The Competitor Blindspot',
      description: 'Who is opening next door next month? Traditional maps show what\'s there now, not the saturation risks of tomorrow.'
    },
    {
      icon: 'groups',
      iconBgClass: 'bg-purple-100 dark:bg-purple-900/30',
      iconTextClass: 'text-purple-600 dark:text-purple-400',
      title: 'The Demographic Gap',
      description: 'Are these your customers or just passersby? Misaligning product price points with neighborhood income levels is fatal.'
    },
    {
      icon: 'warning',
      iconBgClass: 'bg-slate-200 dark:bg-slate-700',
      iconTextClass: 'text-slate-700 dark:text-slate-300',
      title: 'The Stakes',
      description: 'A 5-year lease is a heavy anchor. Getting it wrong doesn\'t just mean low sales; it means bankruptcy.',
      hasBorder: true
    }
  ];
}

