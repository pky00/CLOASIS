import { Component, OnInit} from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { ActivatedRoute, Data } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course.service';
import { RoutingExtrasService } from 'src/app/services/routing-extras.service';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.css']
})
export class CourseDetailPageComponent implements OnInit{

  setPage(i:string){
    this.routingExtras.setCoursePage(i);
  }

  course: Course;
  page: string = "Students";

  constructor(private route: ActivatedRoute,private courseService: CourseService,private routingExtras: RoutingExtrasService) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.course = data['course'];
        }
      );
    this.routingExtras.coursePage
      .subscribe(
        (page: string) => {
          this.page = page;
        }
      );
  }


}
