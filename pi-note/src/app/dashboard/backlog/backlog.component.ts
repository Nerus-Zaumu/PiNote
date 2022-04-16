import { NotesService } from 'src/app/shared/notes.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit, AfterViewInit {

  displayedColumns = ['serialNum', 'title', 'content', 'edit', 'delete'];
  pageOptions = [5, 10, 15, 20]
  dataSource: any;
  @ViewChild('paginator') paginator: MatPaginator | undefined;


  constructor(private noteService: NotesService) { }

  testData = this.noteService.testData

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.testData)
    this.dataSource.paginator = this.paginator
  }


}
