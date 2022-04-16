import { NotesService } from './../shared/notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public notesService: NotesService) { }

  ngOnInit(): void {
  }

}
