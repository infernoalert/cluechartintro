import { Component } from '@angular/core';
import { YoutubeVideoComponent } from '../../../../components/youtube-video/youtube-video.component';

@Component({
  selector: 'app-start-local-business-hero',
  standalone: true,
  imports: [YoutubeVideoComponent],
  templateUrl: './start-local-business-hero.component.html',
  styleUrl: './start-local-business-hero.component.scss'
})
export class StartLocalBusinessHeroComponent {
  videoId: string = 'b1gJITjPKkQ';
}

