import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  headerVal = 'Pipe disCussiON';


  constructor() { }

  ngOnInit(): void {
  }
  // changeHeader(){
  //   this.headerVal+=' - ';
  //   // this.headerVal=this.headerVal+ ' - ';
  // }

}
