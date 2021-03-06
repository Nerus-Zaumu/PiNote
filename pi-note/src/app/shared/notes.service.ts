import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseUrl: string = 'http://localhost:5000/api/v1.0';
  statusCode: any;

  testData: {serialNum: number, title: string, content: string}[] = [
    {serialNum: 1, title: 'First content', content: 'This is the content of the first table element. Let us try it out'},
    {serialNum: 2, title: 'First content', content: 'This is the content of the first table element. Let us try it out'},
    {serialNum: 3, title: 'First content', content: 'This is the content of the first table element. Let us try it out'},
    {serialNum: 4, title: 'First content', content: 'This is the content of the first table element. Let us try it out'},
    {serialNum: 5, title: 'First content', content: 'This is the content of the first table element. Let us try it out'},
    {serialNum: 6, title: 'First content', content: 'This is the content of the first table element. Let us try it out'},
    {serialNum: 7, title: 'First content', content: 'This is the content of the first table element. Let us try it out'},
    {serialNum: 8, title: 'First content', content: 'This is the content of the first table element. Let us try it out'},
    {serialNum: 9, title: 'First content', content: 'This is the content of the first table element. Let us try it out'},
    {serialNum: 10, title: 'First content', content: 'This is the content of the first table element. Let us try it out'},
    {serialNum: 11, title: 'First content', content: 'This is the content of the first table element. Let us try it out'},
    {serialNum: 12, title: 'First content', content: 'This is the content of the first table element. Let us try it out'},
    {serialNum: 13, title: 'First content', content: 'This is the content of the first table element. Let us try it out'},
    {serialNum: 14, title: 'First content', content: 'This is the content of the first table element. Let us try it out'}
  ]

  userInfo: any = [];


  signupForm: FormGroup = new FormGroup(
    {
      $key: new FormControl(null),
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(7), Validators.required])
    }
  )

  loginForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)])
  })

  postForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl(''),
    content: new FormControl('')
  })

  constructor(private http: HttpClient, private router: Router) { }


  signup(){
    return this.http.post(`${this.baseUrl}/signup`,  this.signupForm.value)
  }

  login(){
    return this.http.post(`${this.baseUrl}/login`, this.loginForm.value);
  }

  addNote(){
    return this.http.post(`${this.baseUrl}/note`,  this.postForm.value)
   }

   deleteNote(){
     return this.http.delete(`${this.baseUrl}/note`)
   }
   getAllNotes(){
     return this.http.get(`${this.baseUrl}/note`)
   }
}
