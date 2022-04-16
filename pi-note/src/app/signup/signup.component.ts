import { NotesService } from './../shared/notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public notesService: NotesService) { }

  ngOnInit(): void {
  }

}
