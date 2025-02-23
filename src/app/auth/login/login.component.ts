import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { SpinnerComponent } from "../../components/spinner/spinner.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SpinnerComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  myForm: FormGroup
  allData: any = [];
  passwordForm: FormGroup;
  spinner = false;

  constructor(private api: ApiService, private fb: FormBuilder, private router: Router) {
    firebase.initializeApp(environment.firebaseConfig);
    this.myForm = this.fb.group({
      username: [''],
      password: ['']
    })

    this.passwordForm = this.fb.group({
      username: [''],
      oldpassword: [''],
      newPassword: ['']
    })
  }

  ngOnInit(): void {
    if (localStorage.getItem('tokenDance')) {
      this.router.navigateByUrl('/admin')
    }

    // this.update();


    this.getLoginData();
  }


  async getLoginData() {
    this.spinner = true;
    const snapshot = await firebase.firestore().collection('auth').get();
    snapshot.forEach((doc) => {
      this.allData.push(doc.data());
      console.log("mysandwich: ", doc);
      this.spinner = false;
    })
  }


  credentails = true;
  password = false;

  async login() {

    if (!this.password) {
      console.log(this.myForm.value);
      for (let i = 0; i < this.allData.length; i++) {
        if (this.allData[i].username == this.myForm.value.username && this.allData[i].password == this.myForm.value.password) {
          this.credentails = true
          this.router.navigateByUrl('/admin')
          localStorage.setItem('tokenDance', 'true')
          return;
        } else {
          this.credentails = false
        }
      }
      if (!this.credentails) {
        alert("You have entered wrong credentials");
      }
    } else {
      this.spinner = true;
      for (let i = 0; i < this.allData.length; i++) {
        if (this.allData[i].username == this.passwordForm.value.username && this.allData[i].password == this.passwordForm.value.oldpassword) {
          const snapshot = await firebase.firestore().collection("auth").doc("4vhbqmWabjIpzxUbw7XZ").update({
            password: this.passwordForm.value.newPassword
          })
          alert("Password Changes")
          this.password = false;
          
          window.location.reload();
          return;
        } else {
          this.credentails = false
        }
      }
      if (!this.credentails) {
        alert("You have entered wrong credentials");
      }
      this.spinner = false;

    }

  }



  changePassword(data: any) {
    if (data == 'change') {
      this.password = true
    } else {
      this.password = false
    }
  }


}
