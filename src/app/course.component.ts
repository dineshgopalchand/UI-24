import { Component } from "@angular/core";

@Component({
    selector:'app-course',
    // template:'<div>this is course component</div>'
    template:`
    <div>this is course component</div>
    <ul>
        <li *ngFor="let course of shortedCourseList">{{course}}</li>
    </ul>
    `
})
export class CourseComponent{
    courseList=[
        'Angular',
        'HTML',
        'CSS',
        'Javascript',
        'Python'
    ]

    get shortedCourseList(){
        return this.courseList.sort();
    }

}