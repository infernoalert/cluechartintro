import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StartLocalBusinessHeroComponent } from './components/start-local-business-hero/start-local-business-hero.component';
import { StartLocalBusinessProblemComponent } from './components/start-local-business-problem/start-local-business-problem.component';
import { StartLocalBusinessSolutionComponent } from './components/start-local-business-solution/start-local-business-solution.component';
import { StartLocalBusinessArchitectureComponent } from './components/start-local-business-architecture/start-local-business-architecture.component';
import { StartLocalBusinessOutcomeComponent } from './components/start-local-business-outcome/start-local-business-outcome.component';
import { StartLocalBusinessCtaComponent } from './components/start-local-business-cta/start-local-business-cta.component';

@Component({
  selector: 'app-start-local-business',
  standalone: true,
  imports: [
    StartLocalBusinessHeroComponent,
    StartLocalBusinessProblemComponent,
    StartLocalBusinessSolutionComponent,
    StartLocalBusinessArchitectureComponent,
    StartLocalBusinessOutcomeComponent,
    StartLocalBusinessCtaComponent
  ],
  templateUrl: './start-local-business.component.html',
  styleUrl: './start-local-business.component.scss'
})
export class StartLocalBusinessComponent implements OnInit, AfterViewInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
}

