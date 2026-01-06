import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UmlViewerComponent } from '../../../../components/uml-viewer/uml-viewer.component';
import { DiagramService } from '../../../../services/diagram.service';

@Component({
  selector: 'app-start-up-architecture',
  standalone: true,
  imports: [CommonModule, UmlViewerComponent],
  templateUrl: './start-up-architecture.component.html',
  styleUrl: './start-up-architecture.component.scss'
})
export class StartUpArchitectureComponent implements OnInit {
  umlContent: string = '';

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

