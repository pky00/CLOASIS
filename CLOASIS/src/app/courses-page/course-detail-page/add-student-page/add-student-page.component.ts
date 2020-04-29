import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student-page',
  templateUrl: './add-student-page.component.html',
  styleUrls: ['./add-student-page.component.css']
})
export class AddStudentPageComponent implements OnInit {

  course: Course;
  addForm: FormGroup;

  onSubmit(){
    if(this.addForm.valid){
      this.courseService.addStudent(this.course.crn,this.addForm.get("id").value,null,this.addForm.get("name").value,this.addForm.get("email").value,this.addForm.get("phone").value,this.addForm.get("dob").value,this.addForm.get("gender").value);
      this.router.navigate(['/COURSEDETAILPAGE/' + this.course.coursecode]);
    }
  }

  constructor(private route: ActivatedRoute,private courseService: CourseService,private router:Router) { }

  ngOnInit() {
    this.course = this.courseService.currentCourse;


      this.addForm = new FormGroup({
        'name' : new FormControl('Enter Your Full Name',[Validators.required]),
        'id' : new FormControl(null,[Validators.required]),
        'email' : new FormControl('xyz@mail.aub.edu',[Validators.required,Validators.email]),
        'phone' : new FormControl(null,[Validators.required]),
        'dob' : new FormControl(null,[Validators.required]),
        'gender' : new FormControl(null,[Validators.required]),
      });
  }

}
