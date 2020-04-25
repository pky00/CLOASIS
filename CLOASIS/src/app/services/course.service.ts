import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Registration } from '../models/registration.model';
import { Student } from '../models/student.model';
import { Subject } from 'rxjs';

@Injectable()
export class CourseService {

  studentsEmitter = new Subject<Student[]>();

  currentCourse: Course;
  currentStudent: Student;
  editField: string;
  editStudent_ID: string="";


  courses: Course[] = [
    {crn: "202020", name: "Intro to CMPS", coursecode: "CMPS 200", room: "Bliss 205", professor: "Ahmad Dhaini", progress: "High"},
    {crn: "202021", name: "Intro to AI", coursecode: "CMPS 211", room: "Bliss 205", professor: "Ahmad Dhaini", progress: "High"},
    {crn: "202022", name: "Intro to Data Science", coursecode: "CMPS 299", room: "Bliss 205", professor: "Ahmad Dhaini", progress: "High"},
    {crn: "202023", name: "Intro to ML", coursecode: "CMPS 201", room: "Bliss 205", professor: "Ahmad Dhaini", progress: "High"}
];

  registrations: Registration[] = [
    {id: 1,studentid: "201904057",crn: "202020"},
    {id: 2,studentid: "201904058",crn: "202020"},
    {id: 3,studentid: "201904059",crn: "202020"},
    {id: 4,studentid: "201904060",crn: "202020"},
    {id: 5,studentid: "201904061",crn: "202020"},
    {id: 6,studentid: "201904062",crn: "202020"},
    {id: 9,studentid: "201904064",crn: "202020"},
    {id: 10,studentid: "201904065",crn: "202020"},
    {id: 11,studentid: "201904066",crn: "202020"},
    {id: 12,studentid: "201904067",crn: "202020"},
    {id: 13,studentid: "201904060",crn: "202021"},
    {id: 14,studentid: "201904061",crn: "202021"},
    {id: 15,studentid: "201904062",crn: "202021"},
    {id: 16,studentid: "201904061",crn: "202022"},
    {id: 17,studentid: "201904063",crn: "202020"},
    {id: 18,studentid: "201904064",crn: "202022"},
    {id: 19,studentid: "201904065",crn: "202022"},
    {id: 20,studentid: "201904066",crn: "202023"},
    {id: 21,studentid: "201904067",crn: "202023"}
  ];

  students: Student[] = [
    {studentid: "201904057",name: "Peter Yamout",email:"pky00@mail.aub.edu",teaM_ID: null,phone:"+961 71 000000",dob:"1999-01-01T00:00:00",gender:"M"},
    {studentid: "201904058",name: "Peter Yamoout",email:"pky00@mail.aub.edu",teaM_ID: null,phone:"+961 71 000000",dob:"1999-01-01T00:00:00",gender:"M"},
    {studentid: "201904059",name: "Peter Yamooout",email:"pky00@mail.aub.edu",teaM_ID: null,phone:"+961 71 000000",dob:"1999-01-01T00:00:00",gender:"M"},
    {studentid: "201904060",name: "Peter Yamoooout",email:"pky00@mail.aub.edu",teaM_ID: null,phone:"+961 71 000000",dob:"1999-01-01T00:00:00",gender:"M"},
    {studentid: "201904061",name: "Peter Yamooooout",email:"pky00@mail.aub.edu",teaM_ID: null,phone:"+961 71 000000",dob:"1999-01-01T00:00:00",gender:"M"},
    {studentid: "201904062",name: "Peter Yamouooooot",email:"pky00@mail.aub.edu",teaM_ID: null,phone:"+961 71 000000",dob:"1999-01-01T00:00:00",gender:"M"},
    {studentid: "201904063",name: "Peeter Yamout",email:"pky00@mail.aub.edu",teaM_ID: null,phone:"+961 71 000000",dob:"1999-01-01T00:00:00",gender:"M"},
    {studentid: "201904064",name: "Peeeter Yamout",email:"pky00@mail.aub.edu",teaM_ID: null,phone:"+961 71 000000",dob:"1999-01-01T00:00:00",gender:"M"},
    {studentid: "201904065",name: "Peeeeter Yamout",email:"pky00@mail.aub.edu",teaM_ID: null,phone:"+961 71 000000",dob:"1999-01-01T00:00:00",gender:"M"},
    {studentid: "201904066",name: "Peeeeeter Yamout",email:"pky00@mail.aub.edu",teaM_ID: null,phone:"+961 71 000000",dob:"1999-01-01T00:00:00",gender:"M"},
    {studentid: "201904067",name: "Peeeeeeeter Yamout",email:"pky00@mail.aub.edu",teaM_ID: null,phone:"+961 71 000000",dob:"1999-01-01T00:00:00",gender:"M"}
  ];

  getStudent(id:string, student:Student = {studentid: "",name: "",email:"",teaM_ID: "",phone:"",dob:"",gender:""}){
    this.students.forEach(std => {
      if(std.studentid === id){
        student = std;
      }
    });
    return student;
  }

  getNoOfStudents(crn:string,counter:number = 0){
    this.registrations.forEach(reg => {
      if(reg.crn === crn){
        counter++;
      }
    });
    return counter;
  }

  getCourseStudents(CRN: string,a: Student[] = []){
    this.registrations.forEach(reg => {
      if(CRN === reg.crn){
        this.students.forEach(student => {
          if (student.studentid === reg.studentid) {
            a.push(student);
          }
        })
      }
    })
    this.studentsEmitter.next(a);
    return a;
  }

  getCourse(courseCode: string, a: Course = {crn:"N/A", name: "N/A", coursecode: "N/A", room: "N/A", professor: "N/A", progress: "N/A"}){
    this.courses.forEach(course => {
      if (course.coursecode === courseCode) {
        a=course;
      }
    })
    return a;
  }

  getALLCourseCodes(a: string[] = []){
    this.courses.forEach(course => {
      a.push(course.coursecode);
    })
    return a;
  }

  addCourse(crn: string, name: string, coursecode: string,room: string,professor: string,progress: string){
    this.courses.push({crn:crn,name:name,coursecode:coursecode,room:room,professor:professor,progress:progress});
  }

  enrollStudent(CRN:string,studentid:string){
    this.registrations.push({id:Registration.lastid+1,studentid:studentid,crn:CRN});
    Registration.lastid = Registration.lastid + 1;
  }

  editStudent(id: string,student: Student){
    this.students.forEach((std,i: number) => {
      if(std.studentid === id) {
        this.students[i] = student;
      }
    });
  }

  editCourse(crn: string, course: Course){
    this.courses.forEach((crs,i:number)=>{
      if(crs.crn===crn){
        this.courses[i]=course;
        console.log(this.courses);
      }
    });
  }

  unregisterStudent(id: string,crn: string){
    this.registrations.forEach((reg, i:number) => {
      if (reg.studentid === id && reg.crn===crn){
        this.registrations.splice(i,1);
        this.getCourseStudents(crn);
      }
    });
  }

  getCourses(){
    return this.courses.slice();
  }

  getStudents(){
    return this.students.slice();
  }
  remove(crn: string) {
    this.courses.forEach((course,i:number)=>{
      if (course.crn===crn){
        this.courses.splice(i,1);
      }
    });
  }

  

  editcourse(crn:string,course: Course){
    this.courses.forEach((cor,i: number) => {
      if(cor.crn === crn) {
        this.courses[i] = course;
      }
    });
  }


  constructor() { }
}
