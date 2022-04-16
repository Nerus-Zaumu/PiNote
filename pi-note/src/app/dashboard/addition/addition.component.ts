import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  constructor(public notesService: NotesService) { }

  ngOnInit(): void {
  }

}
