import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html',
  styleUrls: ['./class-style-binding.component.scss']
})
export class ClassStyleBindingComponent implements OnInit {


  formValidationError = true;
  constructor() { }

  ngOnInit(): void {
  }
  changeStatus() {
    this.formValidationError = !this.formValidationError;
  }

}
