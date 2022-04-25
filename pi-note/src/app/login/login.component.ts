import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NotesService } from './../shared/notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;

  constructor(public notesService: NotesService,
    private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  login(){
      this.notesService.login().
      pipe(
        catchError(err => {
          this.showFailure();
          return throwError(err);
        })
      ).
      subscribe((response)=>{
        console.log(response)
      this.router.navigate(['/dashboard'])
      this.showSuccess();
    })

  }
  showSuccess() {
    this.toastrService.success('Successfully logged into your PiNote account!', 'Major Success');
  }

  showFailure(){
    this.toastrService.error('Wrong Login Credentials. Make sure you enter the correct email and password', 'Major Error', {
      timeOut: 3000
    })
  }
  }

