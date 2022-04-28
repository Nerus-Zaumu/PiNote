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
  toastrTime: number = 5000
  statusCode: number | undefined;
  statusText: string | undefined;

  constructor(
    public notesService: NotesService,
    private router: Router,
    private toastrService: ToastrService) { }


  signup(){
     this.notesService.signup().
      pipe(
        catchError(err => {
          this.showFailure(err.message)
          return throwError(() => err)
        })
        ).
      subscribe((response) => {
        console.log(response);
        // this.statusCode = response.status;
        // this.statusText = response.statusText;
      this.showSuccess();
      this.router.navigate(['/login'])
      this.notesService.signupForm.reset();
    })
  }

  showSuccess() {
    this.toastrService.success('Successfully Signed up for PiNote!', 'Major Success', {
      timeOut: this.toastrTime
    });
  }

  showFailure(message: string){
    this.toastrService.error(`${message}!\n`, 'Major Error', {
      timeOut: this.toastrTime
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
