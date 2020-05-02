import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  EditForm: FormGroup;
  studentID: string="";
  student: Student;
  constructor(private courseService: CourseService,private router: Router) { }

  ngOnInit(): void {
    this.studentID=this.courseService.editStudent_ID;
    this.student=this.courseService.getStudent(this.studentID);
    this.EditForm=new FormGroup({
      'ID': new FormControl(null,[Validators.required,Validators.pattern('[0-9]{9,9}$')]),
      'Name': new FormControl(null,[Validators.required,Validators.pattern('[A-Z][a-z]+[ ][A-Z][a-z]+')]) ,
      'Email': new FormControl(null,[Validators.required,Validators.email]) ,
      'Phone': new FormControl(null,[Validators.required,Validators.pattern('[+][0-9]+')]) ,
      'Gender':new FormControl(null,[Validators.required]) ,
      'DOB': new FormControl(null,[Validators.required]) 
    })
  }
  onSubmit(){
    if(this.EditForm.valid){
      this.courseService.addStudent("",this.EditForm.get('ID').value,null,this.EditForm.get('Name').value,this.EditForm.get('Email').value,this.EditForm.get('Phone').value,this.EditForm.get('DOB').value,this.EditForm.get('Gender').value);
      this.router.navigate(['/STUDENTSPAGE' ]);
    }
    }

  onCancel(){
    this.router.navigate(['/STUDENTSPAGE' ]);
  }

}
