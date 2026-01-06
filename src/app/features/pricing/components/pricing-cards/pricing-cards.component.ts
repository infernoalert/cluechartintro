import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingCardComponent, PricingFeature } from '../pricing-card/pricing-card.component';

@Component({
  selector: 'app-pricing-cards',
  standalone: true,
  imports: [CommonModule, PricingCardComponent],
  templateUrl: './pricing-cards.component.html',
  styleUrl: './pricing-cards.component.scss'
})
export class PricingCardsComponent {
  architectFeatures: PricingFeature[] = [
    { label: 'Team', value: 'Standard Agents' },
    { label: 'Context', value: 'Standard Memory' },
    { label: 'Private Data', value: 'No Uploads' },
    { label: 'Execution', value: '50 Runs / Month' },
    { label: 'Output', value: 'Read-Only / Text' }
  ];

  orchestratorFeatures: PricingFeature[] = [
    { label: 'Team', value: 'Specialist Agents', icon: 'group_add' },
    { label: 'Context', value: 'Deep Memory', icon: 'memory' },
    { label: 'Private Data', value: 'Reference Assets', icon: 'cloud_upload' },
    { label: 'Execution', value: 'Unlimited Runs', icon: 'bolt' },
    { label: 'Output', value: 'Export Docs, Slides, Code', icon: 'download' }
  ];
}

