import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'dance';
  welcome = true

  message = "Hello Weddance, I’m looking for Wedding Choreographer for our Wedding!"

  openWhatsApp() {
    const whatsappUrl = `https://wa.me/919911587963/?text=${encodeURIComponent(this.message)}`;
    window.location.href = whatsappUrl;
  }



  constructor(private router: Router, private api: ApiService) {
    this.welcome = true
    setTimeout(() => {
      console.log(this.router.url);
      if(this.router.url == '/login' || this.router.url == '/admin'){

      }else{
        // this.router.navigateByUrl('/')
      }
    }, 500)
  }
  ngOnInit(): void {
    // this.router.navigateByUrl('/services');
  }
}
