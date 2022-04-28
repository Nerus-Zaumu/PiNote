import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pi-note';
  userVal: string = 'Test Name'
  nameChange(event: string){
    this.userVal = event;
  }
}
