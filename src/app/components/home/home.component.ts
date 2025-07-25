import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 isMobile: boolean = window.innerWidth <= 576;

  onResize(event: any) {
    this.isMobile = event.target.innerWidth <= 576;
  }

  mediaItems = [
    { type: 'image', src: 'assets/img1.webp' },
    { type: 'video', src: 'assets/video.mp4' },
    { type: 'image', src: 'assets/img.webp' },
            
  ];
}


