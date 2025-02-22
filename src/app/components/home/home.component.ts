import { Component } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { CareersComponent } from "../careers/careers.component";
import { SpinnerComponent } from "../spinner/spinner.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerComponent,
    NgClass
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
  servicePopup = false;
  submit = false;
  head:any;
  content1: any;
  content2:any;

  constructor(private fb: FormBuilder, public api: ApiService) {
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


  serviceDataArray = [
    {
      head: 'Couple dance',
      content1: 'Experience the magic of love come to life with our captivating couple dance performance, designed specifically for weddings. This beautifully choreographed routine blends elegance and emotion, perfectly reflecting the unique bond between two people celebrating their special day. From the first graceful twirl to the heartfelt finale, every movement tells a story of romance and joy.',
      content2: 'Starting Price : 6,000'
    },
    {
      head: 'Group Dance',
      content1: "The heart of every unforgettable wedding lies the magic of dance, and group dance brings that magic in the performances. We specialize in creating stunning, personalized group dance routines that elevate weddings to an extraordinary experience. Together, we’ll create a performance that you and your guests will cherish forever!",
      content2: 'Starting Price: 5,000'

    },
    {
      head: 'Ladies Sangeet',
      content1: 'We provide personalized lessons, easy-to-follow routines, and a supportive atmosphere, ensuring everyone feels like a star on the dance floor. Join us in creating unforgettable memories as we transform your Sangeet into a dazzling dance extravaganza!',
      content2: 'Starting Price : 30,000 per 10 songs'
    },
    {
      head: 'Solo dance',
      content1: "As much as there is excitement for a solo dance performance, there is also the same pressure as to whether the dance will be good or not, but don't worry, when the WedDance team is with you, we train you in such a way that you can perform on your special day, and make your performance remarkable.",
      content2: 'Starting Price : 5,000'
    }
  ]




 

  openPopUp(head: any, content1: any, content2: any) {
    this.servicePopup = true
    this.content1 = content1
    this.content2 = content2
    this.head = head
  }

  closePopup(){
    this.servicePopup = false
  }


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
