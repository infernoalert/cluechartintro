import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentCardComponent } from '../../../../components/agent-card/agent-card.component';

interface Agent {
  title: string;
  description: string;
  icon: string;
  category: string;
  iconColor: 'blue' | 'teal' | 'indigo' | 'purple';
}

@Component({
  selector: 'app-team-agent-library',
  standalone: true,
  imports: [CommonModule, AgentCardComponent],
  templateUrl: './team-agent-library.component.html',
  styleUrl: './team-agent-library.component.scss'
})
export class TeamAgentLibraryComponent {
  agents: Agent[] = [
    {
      title: 'Idea Elaboration Agent',
      description: 'Expands raw concepts into comprehensive business cases.',
      icon: 'lightbulb',
      category: 'Strategy',
      iconColor: 'blue'
    },
    {
      title: 'Startup Pitch Agent',
      description: 'Crafts compelling pitch decks and narrative flows for investors.',
      icon: 'campaign',
      category: 'Strategy',
      iconColor: 'blue'
    },
    {
      title: 'Controls Context Agent',
      description: 'Analyzes system controls and suggests architectural improvements.',
      icon: 'settings_suggest',
      category: 'Engineering',
      iconColor: 'teal'
    },
    {
      title: 'I/O Signal Extraction',
      description: 'Parses complex technical diagrams to extract signal data.',
      icon: 'cable',
      category: 'Engineering',
      iconColor: 'teal'
    },
    {
      title: 'Project Manager',
      description: 'Tracks milestones, assigns tasks, and ensures timeline adherence.',
      icon: 'assignment_turned_in',
      category: 'Operations',
      iconColor: 'indigo'
    },
    {
      title: 'HR Specialist',
      description: 'Manages team dynamics, compliance, and internal policies.',
      icon: 'people',
      category: 'Operations',
      iconColor: 'indigo'
    },
    {
      title: 'Video Marketing Specialist',
      description: 'Generates scripts and storyboards for video content.',
      icon: 'movie',
      category: 'Creative',
      iconColor: 'purple'
    },
    {
      title: 'Slide Presentation Specialist',
      description: 'Structures and designs professional slide decks.',
      icon: 'slideshow',
      category: 'Creative',
      iconColor: 'purple'
    }
  ];
}

