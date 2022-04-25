import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NotesService } from './../shared/notes.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  hide: boolean = true;
  constructor(
    public notesService: NotesService,
    private router: Router,
    private toastrService: ToastrService) { }


  signup(){
      this.notesService.signup().
      pipe(
        catchError(err => {
          this.showFailure()
          return throwError(err)
        })
        ).
      subscribe((response) => {
      this.router.navigate(['/login'])
      this.showSuccess()
    })
  }

  showSuccess() {
    this.toastrService.success('Successfully Signed up for PiNote!', 'Major Success');
  }

  showFailure(){
    this.toastrService.error('Failed to successfully sign up. One or more fields may be wrong', 'Major Error', {
      timeOut: 3000
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
