import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UmlViewerComponent } from '../../../../components/uml-viewer/uml-viewer.component';
import { DiagramService } from '../../../../services/diagram.service';

interface FlowStep {
  color: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-start-local-business-architecture',
  standalone: true,
  imports: [CommonModule, UmlViewerComponent],
  templateUrl: './start-local-business-architecture.component.html',
  styleUrl: './start-local-business-architecture.component.scss'
})
export class StartLocalBusinessArchitectureComponent implements OnInit {
  umlContent: string = '';
  
  flowSteps: FlowStep[] = [
    {
      color: 'bg-primary',
      title: 'The Anchor',
      description: 'User inputs a potential address. This is the seed for all data retrieval.'
    },
    {
      color: 'bg-indigo-500',
      title: 'The Ripple Effect',
      description: 'Agents fire in parallel. Competitor scans, demographic overlays, and foot traffic heatmaps are generated simultaneously.'
    },
    {
      color: 'bg-emerald-500',
      title: 'The Synthesis',
      description: 'The Project Manager agent consolidates findings into a single "Viability Score" and actionable report.'
    }
  ];

  constructor(private diagramService: DiagramService) {}

  ngOnInit(): void {
    this.loadDiagram();
  }

  private loadDiagram(): void {
    this.diagramService.getDiagram('playbook.json').subscribe({
      next: (diagram) => {
        this.umlContent = diagram.content;
      },
      error: (error) => {
        console.error('Error loading diagram:', error);
      }
    });
  }
}

