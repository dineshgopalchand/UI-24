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
  constructor() { }

  ngOnInit(): void {
  }

}
