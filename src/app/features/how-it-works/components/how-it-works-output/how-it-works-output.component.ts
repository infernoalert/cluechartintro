import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Deliverable {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works-output.component.html',
  styleUrl: './how-it-works-output.component.scss'
})
export class HowItWorksOutputComponent {
  deliverables: Deliverable[] = [
    {
      icon: 'description',
      iconBg: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-primary',
      title: 'Master PDF',
      description: 'A comprehensive written report fully formatted with headings, TOC, and citations.'
    },
    {
      icon: 'slideshow',
      iconBg: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: 'text-purple-600',
      title: 'Visual Story',
      description: 'A slide deck or storyboard presentation ready for stakeholder meetings.'
    },
    {
      icon: 'monitoring',
      iconBg: 'bg-emerald-50 dark:bg-emerald-900/20',
      iconColor: 'text-emerald-600',
      title: 'Data Visualization',
      description: 'Key metrics and insights turned into clean, exportable charts and graphs.'
    }
  ];
}

