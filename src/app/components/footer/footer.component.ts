import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private router: Router){}

  email = 'weddance.in@gmail.com'

  routee(loca:any){
    this.router.navigateByUrl(loca)
  }

}
