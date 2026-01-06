import { Component, OnInit } from '@angular/core';
import { DiagramListComponent } from '../../components/diagram-list/diagram-list.component';
import { UmlViewerComponent } from '../../components/uml-viewer/uml-viewer.component';
import { DiagramService, DiagramIndexItem } from '../../services/diagram.service';

@Component({
  selector: 'app-uml-detail',
  imports: [
    DiagramListComponent,
    UmlViewerComponent
  ],
  templateUrl: './uml-detail.component.html',
  styleUrl: './uml-detail.component.scss'
})
export class UmlDetailComponent implements OnInit {
  diagrams: DiagramIndexItem[] = [];
  selectedDiagramContent: string = '';

  constructor(private diagramService: DiagramService) {}

  ngOnInit(): void {
    this.loadDiagramIndex();
  }

  loadDiagramIndex(): void {
    this.diagramService.getDiagramIndex().subscribe({
      next: (data) => {
        this.diagrams = data;
      },
      error: (error) => {
        console.error('Error loading diagram index:', error);
      }
    });
  }

  onDiagramSelected(fileName: string): void {
    this.diagramService.getDiagram(fileName).subscribe({
      next: (diagram) => {
        this.selectedDiagramContent = diagram.content;
      },
      error: (error) => {
        console.error('Error loading diagram:', error);
      }
    });
  }
}
