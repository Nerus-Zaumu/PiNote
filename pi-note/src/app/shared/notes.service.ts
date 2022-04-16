import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

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
