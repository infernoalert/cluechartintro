import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamHeroComponent } from './components/team-hero/team-hero.component';
import { TeamProcessComponent } from './components/team-process/team-process.component';
import { TeamCtaComponent } from './components/team-cta/team-cta.component';
import { AgentCardComponent } from '../../components/agent-card/agent-card.component';

interface Agent {
  title: string;
  description: string;
  icon: string;
  category: string;
  iconColor: 'blue' | 'teal' | 'indigo' | 'purple';
}

type Department = 'Strategy & Startups' | 'Engineering & Technical' | 'Operations & Management' | 'Creative & Marketing';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CommonModule,
    TeamHeroComponent,
    TeamProcessComponent,
    TeamCtaComponent,
    AgentCardComponent
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  selectedDepartment: Department = 'Strategy & Startups';

  departments: Department[] = [
    'Strategy & Startups',
    'Engineering & Technical',
    'Operations & Management',
    'Creative & Marketing'
  ];

  agents: Agent[] = [
    // Department A: Strategy & Startups
    {
      title: 'Idea Elaboration Agent',
      description: 'Expands initial concepts into detailed plans.',
      icon: 'lightbulb',
      category: 'Strategy & Startups',
      iconColor: 'blue'
    },
    {
      title: 'Startup Pitch Agent',
      description: 'Builds investor-ready decks and story arcs.',
      icon: 'campaign',
      category: 'Strategy & Startups',
      iconColor: 'blue'
    },
    {
      title: 'Market Competitor List',
      description: 'Identifies rivals and analyzes their weaknesses.',
      icon: 'bar_chart',
      category: 'Strategy & Startups',
      iconColor: 'blue'
    },
    {
      title: 'Customer Archetype',
      description: 'Builds psychological profiles of your target user.',
      icon: 'people',
      category: 'Strategy & Startups',
      iconColor: 'blue'
    },
    {
      title: 'Australia Online Legal',
      description: 'Checks compliance with APP and corporate law.',
      icon: 'gavel',
      category: 'Strategy & Startups',
      iconColor: 'blue'
    },
    {
      title: 'Business Analyst',
      description: 'Feasibility assessments and strategic planning.',
      icon: 'analytics',
      category: 'Strategy & Startups',
      iconColor: 'blue'
    },
    // Department B: Engineering & Technical (The Specialists)
    {
      title: 'Controls Context Agent',
      description: 'The Lead Engineer. Scans FDs for global variables.',
      icon: 'settings_suggest',
      category: 'Engineering & Technical',
      iconColor: 'teal'
    },
    {
      title: 'I/O Signal Extraction',
      description: 'The Electrical Designer. Infers hard and soft I/O.',
      icon: 'cable',
      category: 'Engineering & Technical',
      iconColor: 'teal'
    },
    {
      title: 'Asset Data Extraction',
      description: 'The Mechanical Interface. Builds equipment hierarchies.',
      icon: 'precision_manufacturing',
      category: 'Engineering & Technical',
      iconColor: 'teal'
    },
    {
      title: 'Industrial Safety Agent',
      description: 'Maps interlocks, E-Stops, and alarm limits.',
      icon: 'shield',
      category: 'Engineering & Technical',
      iconColor: 'teal'
    },
    {
      title: 'Controls Logic Agent',
      description: 'Generates Description of Operations and pseudocode.',
      icon: 'code',
      category: 'Engineering & Technical',
      iconColor: 'teal'
    },
    // Department C: Operations & Management
    {
      title: 'Project Manager',
      description: 'Tracks milestones, risks, and timelines.',
      icon: 'assignment_turned_in',
      category: 'Operations & Management',
      iconColor: 'indigo'
    },
    {
      title: 'HR Specialist',
      description: 'Handles organizational design and hiring strategy.',
      icon: 'work',
      category: 'Operations & Management',
      iconColor: 'indigo'
    },
    {
      title: 'Financial Analyst',
      description: 'Budget planning and ROI analysis.',
      icon: 'account_balance',
      category: 'Operations & Management',
      iconColor: 'indigo'
    },
    {
      title: 'Quality Assurance',
      description: 'Ensures testing protocols and standards are met.',
      icon: 'verified',
      category: 'Operations & Management',
      iconColor: 'indigo'
    },
    // Department D: Creative & Marketing
    {
      title: 'Video Marketing Specialist',
      description: 'Scripting and channel distribution planning.',
      icon: 'movie',
      category: 'Creative & Marketing',
      iconColor: 'purple'
    },
    {
      title: 'Slide Presentation Specialist',
      description: 'Generates Reveal.js presentations.',
      icon: 'slideshow',
      category: 'Creative & Marketing',
      iconColor: 'purple'
    },
    {
      title: 'Keyword Planner',
      description: 'SEO strategy and commercial intent analysis.',
      icon: 'search',
      category: 'Creative & Marketing',
      iconColor: 'purple'
    },
    {
      title: 'Mermaid Diagram Specialist',
      description: 'Visualizes workflows into diagrams.',
      icon: 'schema',
      category: 'Creative & Marketing',
      iconColor: 'purple'
    }
  ];

  get filteredAgents(): Agent[] {
    return this.agents.filter(agent => agent.category === this.selectedDepartment);
  }

  selectDepartment(department: Department): void {
    this.selectedDepartment = department;
  }
}

