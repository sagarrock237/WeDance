import { Component } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { CareersComponent } from '../components/careers/careers.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [
        YouTubePlayerModule,
        FormsModule,
        ReactiveFormsModule,
        SpinnerComponent,
        NgClass
  ],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component {

  
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
        head: 'Virtual  Wedding Choreography',
        content1: 'Virtual choreography made convenient with WEDDANCE! Our team has over 200 weddings choreographed worldwide, providing expertise to teach anyone via virtual or recorded tutorials. Experience the in-person feel from the comfort of your own home with ample practice sessions to ensure a prepared final performance.',
        content2: ''
      },
      {
        head: 'Custom Choreography',
        content1: "For Every Occasion WEDDANCE provides exceptional choreography services for schools, corporates, and the music industry. We create visually stunning performances that capture the essence of any event, with customized dance pieces, music, costumes, and prop ideas tailored to meet the unique needs of each client.",
        content2: ''
  
      },
      {
        head: 'Wedding Choreography',
        content1: 'Unforgettable weddings start with WEDDANCE wedding choreography. Our team will guide you through every step of your dance journey, from pre-planning to the big day. We ensure a stress-free and fun wedding rehearsal with our sense of humour, preparing you to dance with energy and confidence. Create memories that will last a lifetime with a dance routine your guests will never forget.',
        content2: ''
      },
      {
        head: 'Personalized Entries',
        content1: "WEDDANCE can create customised choreography for the bride and groom's entry into the wedding ceremony or reception, making it a memorable and unique moment.",
        content2: ''
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
