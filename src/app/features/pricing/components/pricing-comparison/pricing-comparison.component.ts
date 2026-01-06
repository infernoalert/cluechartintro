import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ComparisonRow {
  feature: string;
  architect: string;
  orchestrator: string;
}

@Component({
  selector: 'app-pricing-comparison',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-comparison.component.html',
  styleUrl: './pricing-comparison.component.scss'
})
export class PricingComparisonComponent {
  comparisonRows: ComparisonRow[] = [
    {
      feature: 'Agent Types',
      architect: 'Standard Generalists',
      orchestrator: 'Specialist Experts'
    },
    {
      feature: 'Context Window',
      architect: 'Standard (8k tokens)',
      orchestrator: 'Deep Memory (128k tokens)'
    },
    {
      feature: 'Knowledge Base',
      architect: 'None',
      orchestrator: 'Upload PDFs, CSVs, Docs'
    },
    {
      feature: 'Export Options',
      architect: 'Copy/Paste Text',
      orchestrator: 'Native Formats (.docx, .pptx)'
    }
  ];
}

