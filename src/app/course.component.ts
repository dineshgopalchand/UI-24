import { Component } from "@angular/core";

@Component({
    selector:'app-course',
    // template:'<div>this is course component</div>'
    template:`
    <div>this is course component</div>
    <ul>
        <li *ngFor="let course of courseList">{{course}}</li>
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
}