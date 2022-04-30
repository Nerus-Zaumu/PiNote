import { NotesService } from 'src/app/shared/notes.service';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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

  testData = this.noteService.userInfo;
  // useAbleData: {id: string, title: string, content: string}[] = []
  useAbleData: any = [];

  ngOnInit(): void {
    let actualPayload = this.testData[1];
    let counter: number = 0;
    for(const key in actualPayload){
      if(actualPayload.hasOwnProperty(key)){
        this.useAbleData.push({...actualPayload[key as keyof typeof actualPayload], id: counter})
      }
      counter++;
    }
    this.dataSource = new MatTableDataSource(this.useAbleData)
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }
}
