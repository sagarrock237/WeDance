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



  constructor(private router: Router, private api: ApiService) {
    this.welcome = true
    this.router.navigateByUrl('/')
  }
  ngOnInit(): void {
    // this.router.navigateByUrl('/services');
    setTimeout(() => {
      this.welcome = false;
      // this.router.navigateByUrl('/')
    }, 3000)
  }
}
