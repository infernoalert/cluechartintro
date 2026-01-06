import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-agent-card',
  standalone: true,
  imports: [],
  templateUrl: './agent-card.component.html',
  styleUrl: './agent-card.component.scss'
})
export class AgentCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
  @Input() category: string = '';
  @Input() iconColor: 'blue' | 'teal' | 'indigo' | 'purple' = 'blue';

  get iconColorClasses(): string {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600',
      teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600'
    };
    return colorMap[this.iconColor] || colorMap['blue'];
  }
}

