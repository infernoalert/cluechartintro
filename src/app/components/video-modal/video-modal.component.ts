import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeVideoComponent } from '../youtube-video/youtube-video.component';

@Component({
  selector: 'app-video-modal',
  standalone: true,
  imports: [CommonModule, YoutubeVideoComponent],
  templateUrl: './video-modal.component.html',
  styleUrl: './video-modal.component.scss'
})
export class VideoModalComponent {
  @Input() isOpen: boolean = false;
  @Input() videoId: string = '';
  @Input() title: string = '';
  @Output() close = new EventEmitter<void>();

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent): void {
    if (this.isOpen) {
      this.closeModal();
    }
  }

  closeModal(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    // Close modal if clicking on the backdrop (not the modal content)
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  }
}

