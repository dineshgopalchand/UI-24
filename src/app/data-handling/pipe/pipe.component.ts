import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  headerVal = 'Pipe disCussiON';
  course = {
    title: "Angular Course",
    rating: 4.75232,
    rating1: 4,
    students: 2000,
    price: 10000,
    releaseDate: new Date(2018, 19, 10)
  };

  defaultCurrencyType='AUD';
  constructor() { }

  ngOnInit(): void {
  }
  // changeHeader(){
  //   this.headerVal+=' - ';
  //   // this.headerVal=this.headerVal+ ' - ';
  // }

  // stringfyObject(obj:any){
  //   return JSON.stringify(obj);
  // }
}
