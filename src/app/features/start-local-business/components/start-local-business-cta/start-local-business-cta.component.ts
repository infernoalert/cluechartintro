import { Component } from '@angular/core';

@Component({
  selector: 'app-start-local-business-cta',
  standalone: true,
  imports: [],
  templateUrl: './start-local-business-cta.component.html',
  styleUrl: './start-local-business-cta.component.scss'
})
export class StartLocalBusinessCtaComponent {
  redirectToAgents(): void {
    window.location.href = 'https://agents.cluechart.com/';
  }
}

