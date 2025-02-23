import { Component } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  
  myForm: FormGroup

  constructor(private api: ApiService, private fb: FormBuilder){
    this.myForm = this.fb.group({
      username:[''],
      password: ['']
    })
  }





  auth(){
    // console.log(this.myForm.value)
    this.api.addSandwich('auth', this.myForm.value).then((result)=>{
      console.log(result);
      alert("Your are now Registered")
    })
  }


}
