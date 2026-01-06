import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoModalComponent } from '../../../../components/video-modal/video-modal.component';

@Component({
  selector: 'app-team-process',
  standalone: true,
  imports: [CommonModule, VideoModalComponent],
  templateUrl: './team-process.component.html',
  styleUrl: './team-process.component.scss'
})
export class TeamProcessComponent {
  // Video IDs
  video1Id: string = '4AJTi59Rhao'; // Step 1: Assembly - "Selecting Agents from the Library"
  video2Id: string = 'U4VsHqq0HEY'; // Step 2: Briefing - "The Consultant Agent Q&A Flow"
  video3Id: string = 'PsNTX76VwPM'; // Step 4: Workspace - "The Chat/Workspace in Action"
  
  // Modal state
  isModalOpen: boolean = false;
  currentVideoId: string = '';
  currentVideoTitle: string = '';

  openVideo(videoId: string, title: string): void {
    this.currentVideoId = videoId;
    this.currentVideoTitle = title;
    this.isModalOpen = true;
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeVideo(): void {
    this.isModalOpen = false;
    this.currentVideoId = '';
    this.currentVideoTitle = '';
    // Restore body scroll
    document.body.style.overflow = '';
  }
}

