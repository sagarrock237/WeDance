import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgClass } from '@angular/common';
import { SpinnerComponent } from "../../components/spinner/spinner.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-admin-data',
  standalone: true,
  imports: [
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    NgClass,
    SpinnerComponent,
  ],
  templateUrl: './admin-data.component.html',
  styleUrl: './admin-data.component.css'
})
export class AdminDataComponent {


  
  enquiry = true
  contact = false;
  carrers = false;
  allData: any = [];
  spinner = false;

  constructor(public router: Router) {
  }

  ngOnInit() {
    if (!localStorage.getItem('tokenDance')) {
      this.router.navigateByUrl('/login')
    }
    this.getData();
  }

  back(){
    this.router.navigateByUrl('/admin')
  }

  StudentData: any;
  list: any[] = [];
  tableName = 'Help Center';
  url = '';
  dataSource: any;
  displayedColumns: string[] = ["name", "email", "phone", "age", "gender", "location", "resume", "package", "date", "comment",];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;




  Filterchange(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.dataSource.filter = value;
    console.log(this.dataSource);
  }

  logOut(){
    localStorage.removeItem('tokenDance')
    this.router.navigateByUrl('/login');
  }

  daraARRAY: any = []


  async getData() {
    this.spinner = true
    this.url = this.router.url.split('/')[2];
    // console.log(this.url)
    this.allData = [];
    const snapshot = await firebase.firestore().collection(this.url).get();
    snapshot.forEach((doc) => {
      this.allData.push(doc.data());

    })
    let myData: any = [];
    for (let i = 0; i < this.allData.length; i++) {
      myData.push(this.allData[i]);
      this.daraARRAY = this.allData[i]
      console.log(this.daraARRAY);
    }
    // this.dataSource = myData;
    this.dataSource = new MatTableDataSource(myData)
    this.dataSource.paginator = this.paginatior
    this.dataSource.sort = this.sort
    console.log(this.dataSource);
    this.spinner = false

  }


  downloadBase64(name:any, base64String: any) {
    if (!base64String) return;
    const a = document.createElement('a');
    a.href = base64String;
    a.download = `${name}-Resume`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }


}
