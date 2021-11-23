import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courseList = [
    'Angular',
    'HTML',
    'CSS',
    'Javascript',
    'Python',
    'PHP'
  ];
  constructor() { }

  addNewCourse() {
    this.courseList.push('course-' + (this.courseList.length + 1))
  }
}
