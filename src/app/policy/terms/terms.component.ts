import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {

  constructor(){
    window.scroll(0, 0)
  }

  email = 'weddance.in@gmail.com'
}
