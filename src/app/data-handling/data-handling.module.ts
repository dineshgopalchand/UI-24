import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';


@NgModule({
  declarations: [
    DataBindingComponent,
    ClassStyleBindingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DataBindingComponent
  ]
})
export class DataHandlingModule { }
