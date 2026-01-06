import { Component } from '@angular/core';
import { HomeHeroComponent } from '../../features/home/components/home-hero/home-hero.component';
import { HomeProblemComponent } from '../../features/home/components/home-problem/home-problem.component';
import { HomePhilosophyComponent } from '../../features/home/components/home-philosophy/home-philosophy.component';
import { HomeWorkflowComponent } from '../../features/home/components/home-workflow/home-workflow.component';
import { HomeContextComponent } from '../../features/home/components/home-context/home-context.component';
import { HomeOrchestratorComponent } from '../../features/home/components/home-orchestrator/home-orchestrator.component';
import { HomeCtaComponent } from '../../features/home/components/home-cta/home-cta.component';

@Component({
  selector: 'app-home',
  imports: [
    HomeHeroComponent,
    HomeProblemComponent,
    HomePhilosophyComponent,
    HomeWorkflowComponent,
    HomeContextComponent,
    HomeOrchestratorComponent,
    HomeCtaComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
