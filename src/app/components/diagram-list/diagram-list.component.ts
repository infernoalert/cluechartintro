import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagramIndexItem } from '../../services/diagram.service';

@Component({
  selector: 'app-diagram-list',
  imports: [CommonModule],
  templateUrl: './diagram-list.component.html',
  styleUrl: './diagram-list.component.scss'
})
export class DiagramListComponent {
  @Input() diagrams: DiagramIndexItem[] = [];
  @Output() diagramSelected = new EventEmitter<string>();

  selectedFile: string | null = null;

  onSelectDiagram(file: string): void {
    this.selectedFile = file;
    this.diagramSelected.emit(file);
  }
}
