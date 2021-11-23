import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  title = 'Courses List';
  courseList = [
    'Angular',
    'HTML',
    'CSS',
    'Javascript',
    'Python'
  ]

  constructor() {
    console.log('this will get excuted at the time of object creatation');
  }

  ngOnInit(): void {
    console.log('this code will get excuted once, after new object create');
  }
  addNewCourse() {
    this.courseList.push('course-' + (this.courseList.length+1))
  }

}
