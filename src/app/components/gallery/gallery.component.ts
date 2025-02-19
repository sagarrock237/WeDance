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

  shift(action:any){
    if(action == 'image'){
      this.image = true
    }else{
      this.image = false;
    }
  }

}
