import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  title='Data Binding Examples';
  description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, natus?';
  descriptionBold='<b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Beatae, natus?';
  imgSrc="https://dummyimage.com/300x200/3030c7/fff.png";
  rowSpan=3;
  colSpan=2;

  imgAlt="Dummy Image";
  constructor() { }

  ngOnInit(): void {
  }

}
