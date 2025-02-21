import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit{

 
  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
  }

  ngOnInit(): void {
  }

  // async addSandwich(collection: any, data: any) { // (3)
  //   await firebase.firestore().collection(collection).add({
  //     data
  //   }).then((result)=>{
  //     console.log(result)
  //   });

  // }


  async addSandwich(collection: string, data: any) {
    try {
      const docRef = await firebase.firestore().collection(collection).add(data);
      console.log("Document written with ID: ", docRef); // Access the ID
      return docRef; // Good practice to return the DocumentReference
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error; // Re-throw the error
    }
  }


  // async getAllStudent() {
  //   const snapshot = await firebase.firestore().collection('auth').get();
  //   snapshot.forEach((doc) => {
  //     this.sandwixhes.push(doc.data());
  //     console.log("mysandwich: ",this.sandwixhes);
  //   })
  // }

  



}
