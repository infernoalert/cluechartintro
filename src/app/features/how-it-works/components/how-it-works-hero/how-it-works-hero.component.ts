import { Component } from '@angular/core';
import { YoutubeVideoComponent } from '../../../../components/youtube-video/youtube-video.component';

@Component({
  selector: 'app-how-it-works-hero',
  standalone: true,
  imports: [YoutubeVideoComponent],
  templateUrl: './how-it-works-hero.component.html',
  styleUrl: './how-it-works-hero.component.scss'
})
export class HowItWorksHeroComponent {
  videoId = 'bE6mtxbSGQ4';
}

