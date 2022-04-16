import { NotesService } from 'src/app/shared/notes.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('paginator') paginator: MatPaginator | undefined;

  displayedColumns = ['serialNum', 'title', 'content'];
  pageOptions = [5, 10, 15, 20]
  dataSource: any;


  constructor(private noteService: NotesService) { }

  testData = this.noteService.testData

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.testData)
    this.dataSource.paginator = this.paginator
  }

}
