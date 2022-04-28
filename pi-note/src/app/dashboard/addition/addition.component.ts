import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/shared/notes.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

   statusCode: number | undefined;
   statusText: string | undefined;
   toastrTime: number = 5000

  constructor(public notesService: NotesService,
    private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  addNote(){
    this.notesService.addNote().
    pipe(
      catchError(err=>{
        this.showFailure(err.message);
        return throwError(() => err);
      })
    ).subscribe((response) => {
      // this.statusCode = response.status;
      // this.statusText = response.statusText
      console.log(response);
      this.router.navigate(['/dashboard/home']);
      this.notesService.postForm.reset();
    })
  }

  showFailure(message: string){
    this.toastrService.error(`${message}!\n`, 'Major Error', {
      timeOut: this.toastrTime
    });
  }
  showSuccess(){
    this.toastrService.success('Successfully added new note!', 'Major Success', {
      timeOut: this.toastrTime
    })
  }

}
