import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    YouTubePlayer
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  image = true;
  opendedImage = false;
  largeImage = '';

  shift(action: any) {
    if (action == 'image') {
      this.image = true
    } else {
      this.image = false;``
    }
  }

  openImage(data: any, image:any) {
    if (data == 'open') {
      this.largeImage = image;
      this.opendedImage = true
    } else {
      this.opendedImage = false
    }
  }



}
