import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { SpinnerComponent } from "../spinner/spinner.component";
// import { NgxSpinnerService } from 'ngx-spinner';
// import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [ReactiveFormsModule, SpinnerComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

  
  fileName: any;
  base64String: any = '';
  joinForm: FormGroup;
  currentDate:any;
  spinner = false;


  constructor(private fb: FormBuilder, private api: ApiService) {
    this.joinForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      age: [''],
      gender: [''],
      location: ['', Validators.required]
    })
  }

  ngOnInit(): void {

    // get Date
    function taskDate(dateMilli: any) {
      var d = (new Date() + '').split(' ');
      d[2] = d[2] + ',';

      return [d[0], d[1], d[2], d[3]].join(' ');
    }

    var datemilli = Date.parse('Sun May 11,2014');
    this.currentDate = taskDate(datemilli);
  }




  saveData() {
    this.joinForm.markAllAsTouched();
    if (this.joinForm.invalid) {
      alert("Please fill the required field")
    } else if(this.base64String == ''){
      alert('Please add your Resume')
    }
    else {
      this.spinner= true;
      let myData = {
        ...this.joinForm.value,
        resume: this.base64String,
        date: this.currentDate
      }
      this.api.addSandwich('Carrers', myData).then((result) => {
        console.log(result);
        this.joinForm.patchValue({
          name: '',
          number: '',
          email: '',
          age: '',
          gender: '',
          location: ''
        })
        this.base64String = ''
        this.spinner = false
        alert("Applied SuccessFully")
        this.joinForm.markAsUntouched();
      }).catch((err)=>{
        alert(err);
        this.spinner = false
      })
    }
  }


  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.fileName = file.name;
      const reader = new FileReader();
      reader.onload = () => {
        this.base64String = reader.result?.toString() || null;
        // console.log(this.base64String);
      };
      reader.readAsDataURL(file);
    }
  }
}
