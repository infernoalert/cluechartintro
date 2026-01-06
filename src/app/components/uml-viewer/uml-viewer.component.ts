import { Component, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import mermaid from 'mermaid';

@Component({
  selector: 'app-uml-viewer',
  imports: [CommonModule],
  templateUrl: './uml-viewer.component.html',
  styleUrl: './uml-viewer.component.scss'
})
export class UmlViewerComponent implements OnChanges, AfterViewInit {
  @Input() umlContent: string = '';
  @ViewChild('mermaidContainer', { static: false }) mermaidContainer!: ElementRef;

  private mermaidInitialized = false;

  ngAfterViewInit(): void {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose',
    });
    this.mermaidInitialized = true;
    if (this.umlContent) {
      this.renderDiagram();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['umlContent'] && !changes['umlContent'].firstChange && this.mermaidInitialized) {
      this.renderDiagram();
    }
  }

  private async renderDiagram(): Promise<void> {
    if (!this.umlContent || !this.mermaidContainer) {
      return;
    }

    try {
      const id = `mermaid-${Date.now()}`;
      const { svg } = await mermaid.render(id, this.umlContent);
      this.mermaidContainer.nativeElement.innerHTML = svg;
    } catch (error) {
      console.error('Error rendering mermaid diagram:', error);
      this.mermaidContainer.nativeElement.innerHTML = '<p class="error">Error rendering diagram</p>';
    }
  }
}
