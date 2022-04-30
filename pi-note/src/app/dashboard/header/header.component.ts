import { Router } from '@angular/router';
import { NotesService } from 'src/app/shared/notes.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private notesService: NotesService, private router: Router) { }
  userName: string = 'Name';
  ngOnInit(): void {
  }

  getAllNotes(){
    this.notesService.getAllNotes().
    pipe(map(responseData => {
      const tempNotes = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            tempNotes.push({...responseData[key as keyof typeof responseData], id: key});
          }
        }
        this.notesService.userInfo = tempNotes
        return tempNotes;
    })).subscribe(data => {
      this.router.navigate(['/dashboard/home'])
      console.log(data);

    })
  }

}
