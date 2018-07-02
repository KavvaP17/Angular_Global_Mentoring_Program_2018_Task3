import { Component, OnInit } from '@angular/core';
import { Course } from '../../../courses/models/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  public courses: Array<Course> = [];

  constructor() { }

  ngOnInit() {
    this.courses.push(
      new Course(1, 'course#1', Date.now(), 100, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`)
    );
    this.courses.push(
      new Course(2, 'course#2', Date.now(), 200, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`)
    );
    this.courses.push(
      new Course(3, 'course#3', Date.now(), 120, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`)
    );
    this.courses.push(
      new Course(4, 'course#4', Date.now(), 110, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`)
    );
    this.courses.push(
      new Course(5, 'course#5', Date.now(), 90, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`)
    );
    this.courses.push(
      new Course(6, 'course#6', Date.now(), 10, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`)
    );
  }
  public deleteCourse(id): void {
    console.log(`cousre id:${id} deleted`);
  }

}
