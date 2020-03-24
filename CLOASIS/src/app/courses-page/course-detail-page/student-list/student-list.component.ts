import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  course: Course;
  students: Student[];
  selectedStudent: Student = {id:0,name:"Please select a Student",studentid:"",email:"",imagePath:""};

  selectStudent(id:number){
    this.students.forEach(student => {
      if(student.id === id){
        this.selectedStudent = student;
        this.courseService.currentStudent = student;
      }
    })
  }

  constructor(private route: ActivatedRoute,private courseService: CourseService,private router:Router) { }

  private sub: Subscription; 

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.course = data['course'];
          this.students = this.courseService.getCourseStudents(this.course.crn);
          this.courseService.currentCourse = this.course;
        }
      );
      this.sub = this.courseService.studentsEmitter.subscribe(data => {
      this.students = data;
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
