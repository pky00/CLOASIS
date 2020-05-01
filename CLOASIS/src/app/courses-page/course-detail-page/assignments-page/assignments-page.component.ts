import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { Course } from 'src/app/models/course.model';
import { AssignmentService } from 'src/app/services/assignment.service';
import { CourseService } from 'src/app/services/course.service';
import { GradesService } from 'src/app/services/grades.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-assignments-page',
  templateUrl: './assignments-page.component.html',
  styleUrls: ['./assignments-page.component.css']
})
export class AssignmentsPageComponent implements OnInit {
assignments: Assignment[];
course: Course;
  constructor(private assignmentservice: AssignmentService, private courseserive: CourseService,private gradeservie: GradesService,private reportservice: ReportService) { }

  ngOnInit(): void {
    this.course=this.courseserive.currentCourse;
    this.assignments=this.assignmentservice.get_assignments(this.course.crn)
  }

  get_report_date(id:string){
    console.log(this.reportservice.get_date(id))
    return this.reportservice.get_date(id);
  }

}
