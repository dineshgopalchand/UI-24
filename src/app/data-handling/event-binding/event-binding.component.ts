import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  title = "Event Binding";
  constructor() { }

  ngOnInit(): void {
  }
  buttonClick(e: MouseEvent) {
    e.stopPropagation();
    console.log('button click');
    console.log(e);
  }
  parentContainerClicked(e: MouseEvent) {
    console.log('Parent Element click');
    console.log(e);
  }
  childContainerClicked(e: MouseEvent) {
    console.log('child Element click');
    console.log(e);
  }
  // inputFieldEvent(e: KeyboardEvent) {
  //   console.log(e);
  //   // console.log((e.target as HTMLInputElement).value); // to get the value of input element
  // }

}
