import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BottleneckCard {
  icon: string;
  iconBgClass: string;
  iconTextClass: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-marketing-bottleneck',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketing-bottleneck.component.html',
  styleUrl: './marketing-bottleneck.component.scss'
})
export class MarketingBottleneckComponent {
  cards: BottleneckCard[] = [
    {
      icon: 'waves',
      iconBgClass: 'bg-red-100 dark:bg-red-900/30',
      iconTextClass: 'text-red-600 dark:text-red-400',
      title: 'The Data Swamp',
      description: 'You are drowning in raw numbers without insights. Extracting value feels like finding a needle in a haystack.'
    },
    {
      icon: 'visibility_off',
      iconBgClass: 'bg-orange-100 dark:bg-orange-900/30',
      iconTextClass: 'text-orange-600 dark:text-orange-400',
      title: 'The Competitor Fog',
      description: 'You can\'t see what your rivals are doing in real-time. By the time you spot a move, it\'s too late to counter.'
    },
    {
      icon: 'history',
      iconBgClass: 'bg-amber-100 dark:bg-amber-900/30',
      iconTextClass: 'text-amber-600 dark:text-amber-400',
      title: 'The Time Lag',
      description: 'By the time you gather and analyze the manual data, the trend is over. You\'re always one step behind.'
    }
  ];
}

