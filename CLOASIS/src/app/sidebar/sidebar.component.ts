import { Component, OnInit, OnChanges } from '@angular/core';
import { CourseService } from '../services/course.service';
import { RoutingExtrasService } from '../services/routing-extras.service';

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
    this.routingExtras.setCoursePage("Students");
  }

  constructor(private courseService: CourseService,private routingExtras:RoutingExtrasService) { }

  ngOnInit(){
    this.courseCodes = this.courseService.getALLCourseCodes();
  }

}
