import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit(): void {

  }

  routee(loca: any) {
    this.route.navigateByUrl(loca);
    setTimeout(() => {
      if (this.route.url == '/') {
        this.home = true;
        this.gallery = false;
        this.packages = false;
        this.services = false;
        this.contact = false;
        this.careers = false;
      } else if (this.route.url == '/packages') {
        this.packages = true;
        this.home = false;
        this.gallery = false;
        this.careers = false;
        this.services = false;
        this.contact = false;
      } else if (this.route.url == '/gallery') {
        this.gallery = true;
        this.home = false;
        this.careers = false;
        this.packages = false;
        this.services = false;
        this.contact = false;
      } else if (this.route.url == '/services') {
        this.services = true;
        this.home = false;
        this.gallery = false;
        this.careers = false;
        this.packages = false;
        this.contact = false;
      } else if (this.route.url == '/contact') {
        this.contact = true;
        this.home = false;
        this.careers = false;
        this.gallery = false;
        this.packages = false;
        this.services = false;
      } else if(this.route.url == '/careers'){
        this.contact = false;
        this.home = false;
        this.careers = true;
        this.gallery = false;
        this.packages = false;
        this.services = false;
      }
    }, 50)
  }

  home = false;
  gallery = false;
  packages = false;
  services = false;
  contact = false;
  careers = false;



}
