import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { SpinnerComponent } from "../spinner/spinner.component";
// import { SpinnerComponent } from "../spinner/spinner.component";
// import { NgxSpinnerService } from 'ngx-spinner';
// import { ApiService } from '../../mainService/api.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SpinnerComponent
],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  currentDate: any;
  spinner = false;


  constructor(private fb: FormBuilder, private api: ApiService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
      comment: ['']
    })
  }

  ngOnInit() {
    // getData
    function taskDate(dateMilli: any) {
      var d = (new Date() + '').split(' ');
      d[2] = d[2] + ',';

      return [d[0], d[1], d[2], d[3]].join(' ');
    }

    var datemilli = Date.parse('Sun May 11,2014');
    this.currentDate = taskDate(datemilli);
  }




  saveData() {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) {
      alert("Please fill the required field")
    } else {
      this.spinner = true;
      let myData = {
        ...this.contactForm.value,
        date: this.currentDate
      }
      console.log(myData);
      this.api.addSandwich('Contact', myData).then((result) => {
        console.log(result);
        this.contactForm.patchValue({
          name: '',
          number: '',
          email: '',
          Comment: ''
        })
        alert("Thanks, Will contact you soon");
        this.contactForm.markAsUntouched();
        this.spinner = false
      }).catch((err) => {
        alert(err);
        this.spinner = false;
      })

    }
  }
}
