import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FrustrationCard {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-start-up-frustration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-up-frustration.component.html',
  styleUrl: './start-up-frustration.component.scss'
})
export class StartUpFrustrationComponent {
  cards: FrustrationCard[] = [
    {
      icon: 'engineering',
      title: 'The Skills Gap',
      description: 'He\'s an expert in his field, not a CFO, CMO, or CTO. Trying to be all three guarantees mediocrity in all of them.'
    },
    {
      icon: 'link_off',
      title: 'The Disconnection',
      description: 'His pitch deck says one thing, his financial model says another. The data is siloed and conflicts are missed.'
    },
    {
      icon: 'hourglass_empty',
      title: 'The Time Sink',
      description: 'Every hour spent on formatting slides or debugging Excel formulas is an hour not selling the product.'
    }
  ];
}

