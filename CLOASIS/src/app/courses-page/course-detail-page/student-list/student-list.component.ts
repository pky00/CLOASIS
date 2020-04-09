import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Subscription } from 'rxjs';
import { GradesService } from 'src/app/services/grades.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  course: Course;
  students: Student[];
  selectedStudent: Student = {id:0,name:"Please select a Student",studentid:"",email:"",imagePath:""};
  selectedStudentGrades: number[] = [20,40,60,70];
  change: boolean = false;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  public barChartLabels = ['Assignment 1', 'Assignment 2', 'Midterm Exam', 'Final Exam'];
  public barChartType = 'bar';
  public barChartLegend = false;

  public barChartData = [
    {data: this.selectedStudentGrades}
  ];

  selectStudent(id:number){
    this.students.forEach(student => {
      if(student.id === id){
        this.change = true;
        setTimeout(() => {
          this.change = false;
          this.gradesService.selectChartGrades(student.studentid,this.course.crn);
          console.log(this.selectedStudentGrades);
          this.barChartData.forEach((dataset, index)=>{
            this.barChartData[index] = Object.assign({},this.barChartData[index], {
              data: this.selectedStudentGrades
            });
          });
        }, 10);
        this.courseService.currentStudent = student;
        this.selectedStudent = student;
      }
    })
  }

  delete(id:string){
    this.courseService.unregisterStudent(id,this.course.crn);
  }

  constructor(private route: ActivatedRoute,private courseService: CourseService
    ,private router:Router,private gradesService:GradesService) { }

  private sub: Subscription; 
  private selectedGrades: Subscription;

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
    this.selectedGrades = this.gradesService.selectedStudentGradesEmmitter
      .subscribe(
        (grades:number[]) => {
          this.selectedStudentGrades = grades;
        }
      );
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
