import { NotesService } from 'src/app/shared/notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private notesService: NotesService) { }
  userName: string = 'Name';
  ngOnInit(): void {
  }

}
