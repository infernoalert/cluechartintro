import { Component } from '@angular/core';
import { YoutubeVideoComponent } from '../../../../components/youtube-video/youtube-video.component';

@Component({
  selector: 'app-start-up-hero',
  standalone: true,
  imports: [YoutubeVideoComponent],
  templateUrl: './start-up-hero.component.html',
  styleUrl: './start-up-hero.component.scss'
})
export class StartUpHeroComponent {
  videoId: string = 'OKEBZ-mvf8s';
}

