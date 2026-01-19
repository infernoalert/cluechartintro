import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-idea-generator-machine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './idea-generator-machine.component.html',
  styleUrl: './idea-generator-machine.component.scss'
})
export class IdeaGeneratorMachineComponent {
  @Input() who = '';
  @Input() whyValue = '';
  @Input() whatValue = '';
  @Input() synthesis = '';
  @Output() generate = new EventEmitter<void>();

  onGenerate(): void {
    this.generate.emit();
  }
}
