import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

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
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(7), Validators.required])
    }
  )

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)])
  })

  postForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  })

  constructor() { }
}
