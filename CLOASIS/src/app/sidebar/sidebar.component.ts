import { Component, OnInit, OnChanges } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  courseCodes: string[];
  currentCourseCode: string = "";

  selectCourseCode(coursec: string){
    this.currentCourseCode = coursec;
  }

  constructor(private courseService: CourseService) { }

  ngOnInit(){
    this.courseCodes = this.courseService.getALLCourseCodes();
  }

}
