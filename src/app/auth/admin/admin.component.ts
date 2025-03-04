import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private router: Router){}

  ngOnInit(){
    if(!localStorage.getItem('tokenDance')){
      this.router.navigateByUrl('/login')
    }
  }

  routee(location:any){
    this.router.navigateByUrl(`adminData/${location}`)
  }

  logOut(){
    localStorage.removeItem('tokenDance')
    this.router.navigateByUrl('/login');
  }

  

}
