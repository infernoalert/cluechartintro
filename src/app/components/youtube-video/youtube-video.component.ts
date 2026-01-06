import { Component, Input, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-youtube-video',
  standalone: true,
  imports: [YouTubePlayerModule, CommonModule],
  templateUrl: './youtube-video.component.html',
  styleUrl: './youtube-video.component.scss'
})
export class YoutubeVideoComponent implements OnInit {
  @Input() videoId!: string;
  @Input() width: number = 640;
  @Input() height: number = 360;
  @Input() startSeconds: number | undefined;
  @Input() endSeconds: number | undefined;
  
  private platformId = inject(PLATFORM_ID);
  isBrowser: boolean = false;

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  onPlayerReady(event: YT.PlayerEvent): void {
    // Player is ready
    console.log('YouTube player is ready', event);
  }

  onPlayerStateChange(event: YT.OnStateChangeEvent): void {
    // Player state changed
    console.log('YouTube player state changed', event.data);
  }
}
