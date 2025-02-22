import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SpinnerComponent
  ],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {

  form = false;
  joinForm: FormGroup;
  spinner = false;
  openFilled = false;
  currentDate: any;

  constructor(private fb: FormBuilder,private api: ApiService) {
    this.joinForm = this.fb.group({
      name: [''],
      email: [''],
      number: [''],
      package: ['']
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

  letsConnect(code: any, pack:any) {
    if (code == 'open') {
      this.form = true;
      this.joinForm.patchValue({
        package: pack
      })
    } else {
      this.form = false;
    }

  }


  saveData() {

    let myData = {
      ...this.joinForm.value,
      date: this.currentDate,
    }
    this.spinner = true;
    this.api.addSandwich('Package', myData).then((result) => {
      console.log(result);
      this.form = false;
      this.spinner = false;
      this.openFilled = true;
    }).catch((err) => {
      alert(err);
      this.spinner = false
    })
  }

  
  toggleFilled() {
    this.openFilled = false;
  }



}
