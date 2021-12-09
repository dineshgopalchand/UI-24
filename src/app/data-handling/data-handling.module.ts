import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DataHandlingComponent } from './data-handling.component';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';


@NgModule({
  declarations: [
    DataBindingComponent,
    ClassStyleBindingComponent,
    EventBindingComponent,
    DataHandlingComponent,
    PipeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DataHandlingComponent
  ]
})
export class DataHandlingModule { }
