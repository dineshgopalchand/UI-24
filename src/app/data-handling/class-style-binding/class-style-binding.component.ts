import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html',
  styleUrls: ['./class-style-binding.component.scss']
})
export class ClassStyleBindingComponent implements OnInit {


  error = true;
  errorMessage="There is some problem. Please check it once again";
  successMessage="Waooo.. Everything is looking good";
  constructor() { }

  ngOnInit(): void {
  }
  changeStatus() {
    this.error = !this.error;
  }

}
