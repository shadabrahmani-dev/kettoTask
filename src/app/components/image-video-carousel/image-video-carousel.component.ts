import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-video-carousel',
  templateUrl: './image-video-carousel.component.html',
  styleUrls: ['./image-video-carousel.component.scss']
})
export class ImageVideoCarouselComponent {
 @Input() mediaItems: any[] = [];
}
