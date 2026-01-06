import { Component } from '@angular/core';
import { YoutubeVideoComponent } from '../../../../components/youtube-video/youtube-video.component';

@Component({
  selector: 'app-marketing-hero',
  standalone: true,
  imports: [YoutubeVideoComponent],
  templateUrl: './marketing-hero.component.html',
  styleUrl: './marketing-hero.component.scss'
})
export class MarketingHeroComponent {
  videoId: string = 'AUzo-BRkOKs';
}

