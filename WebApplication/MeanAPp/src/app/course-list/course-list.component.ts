import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses = [
    {title : 'aka1', id : '1'},
    {title : 'aka2', id : '2'},
    {title : 'aka3', id : '3'},
    {title : 'aka4', id : '4'}];

  constructor() { }

  addCourse(newtitle){

    const newcourse = {title : newtitle, id : (new Date()).getTime()};

  this.courses.push(newcourse);
 }

 deletecourse(deletecourse){


 }
  ngOnInit() {
  }

}
