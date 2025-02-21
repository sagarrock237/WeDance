import { Component } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { CareersComponent } from "../careers/careers.component";
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    CareersComponent,
    SpinnerComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  video = false;
  form = false
  currentDate: any;
  joinForm: FormGroup;
  spinner = false;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.joinForm = this.fb.group({
      name: [''],
      email: [''],
      number: ['']
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

  submit = false;

  toggleFilled() {
    this.openFilled = false;
  }

  letsConnect(code: any) {
    if (code == 'open') {
      this.form = true;
    } else {
      this.form = false;
    }

  }

  openFilled = false;



  saveData() {

    let myData = {
      ...this.joinForm.value,
      date: this.currentDate
    }
    this.spinner = true;
    this.api.addSandwich('Enquiry', myData).then((result) => {
      console.log(result);
      this.form = false;
      this.spinner = false;
      this.openFilled = true;
    }).catch((err)=>{
      alert(err);
      this.spinner = false
    })
  }

  playVideo(action: any) {
    // alert('ads');
    if (action == 'open') {
      this.video = true
    } else {
      this.video = false
    }
  }

}
