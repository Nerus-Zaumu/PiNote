import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseUrl: string = 'http://localhost:5000/api/v1.0';

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
    this.http.post(`${this.baseUrl}/signup`, this.signupForm.value).
    subscribe(response => {
      console.log(`New user ${response} created`);
      
    })
  }

  login(){
    this.http.post(`${this.baseUrl}/login`, this.loginForm.value).
    subscribe(response=>{
      console.log(`User session with id logged in`);
    })
  }

  addNote(){
    this.http.post(`${this.baseUrl}/note`, this.postForm.value).
     subscribe((response) => {
       console.log(response)
       this.router.navigate(['/dashboard/home'])
     })
   }

   deleteNote(){
     this.http.delete(`${this.baseUrl}/note`).
     subscribe(response => {
       console.log(response);
     })
   }
   getAllNotes(){
     this.http.get(`${this.baseUrl}/note`).
     subscribe(response => {
       console.log(response);
       
     })
   }
}
