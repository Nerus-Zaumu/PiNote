import { HttpResponse } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NotesService } from './../shared/notes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  toastrTime: number = 5000;
  statusCode: number | undefined;
  statusText: string | undefined;

  constructor(public notesService: NotesService,
    private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  login(){
      this.notesService.login().
      pipe(
        finalize(() =>{}),
        catchError(err => {
          this.showFailure(err.message);
          return throwError(() => err);
        })
      ).
      subscribe((response)=>{
        // this.statusCode = response.status;
        // this.statusText = response.statusText;
        console.log(response);
        this.showSuccess();
        this.router.navigate(['/dashboard']);
        this.notesService.loginForm.reset()
    })

  }
  showSuccess() {
    this.toastrService.success('Successfully logged into your PiNote account!', 'Major Success', {
      timeOut: this.toastrTime
    });
  }

  showFailure(message: string){
    this.toastrService.error(`${message}!\n`, 'Major Error', {
      timeOut: this.toastrTime
    })
  }
  }

