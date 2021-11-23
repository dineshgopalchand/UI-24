import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  title = 'Courses List';
  courseList :string[]= [];

  constructor(private courseService:CoursesService) {
    console.log('this will get excuted at the time of object creatation');
  }

  ngOnInit(): void {
    this.courseList=this.courseService.courseList;
    console.log('this code will get excuted once, after new object create');
  }
  addNewCourse() {
    this.courseService.addNewCourse();
  }

}
