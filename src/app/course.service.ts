import { Injectable } from "@angular/core";

@Injectable()
export class CourseService {
    courseList = [
        'Angular',
        'HTML',
        'CSS',
        'Javascript',
        'Python'
    ];
    addNewCourse() {
        this.courseList.push('course-' + (this.courseList.length + 1))
    }
}