import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UmlDetailComponent } from './pages/uml-detail/uml-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'uml-detail', component: UmlDetailComponent },
  {
    path: 'how-it-works',
    loadComponent: () => import('./features/how-it-works/how-it-works.component').then(m => m.HowItWorksComponent)
  },
  {
    path: 'pricing',
    loadComponent: () => import('./features/pricing/pricing.component').then(m => m.PricingComponent)
  },
  {
    path: 'start-up',
    loadComponent: () => import('./features/start-up/start-up.component').then(m => m.StartUpComponent)
  },
  {
    path: 'marketing',
    loadComponent: () => import('./features/marketing/marketing.component').then(m => m.MarketingComponent)
  },
  {
    path: 'start-local-business',
    loadComponent: () => import('./features/start-local-business/start-local-business.component')
      .then(m => m.StartLocalBusinessComponent)
  },
  {
    path: 'team',
    loadComponent: () => import('./features/team/team.component').then(m => m.TeamComponent)
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./features/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent)
  },
  {
    path: 'idea-generator',
    loadComponent: () => import('./features/idea-generator/idea-generator.component').then(m => m.IdeaGeneratorComponent)
  }
];
