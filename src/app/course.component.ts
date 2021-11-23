import { Component } from "@angular/core";
import { CourseService } from "./course.service";

@Component({
    selector: 'app-course',
    // template:'<div>this is course component</div>'
    template: `
    <div>this is course component</div>
    <ul>
        <li *ngFor="let course of shortedCourseList">{{course}}</li>
    </ul>
    `
})
export class CourseComponent {
    courseList: string[] = [];
    constructor(public courseService: CourseService) {
        this.courseList = this.courseService.courseList;
    }
    get shortedCourseList() {
        return this.courseList.sort();
    }

}