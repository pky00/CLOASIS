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
    {id: 4,studentid: "201904060",crn: "202021"},
    {id: 5,studentid: "201904061",crn: "202021"},
    {id: 6,studentid: "201904062",crn: "202021"},
    {id: 7,studentid: "201904061",crn: "202022"},
    {id: 8,studentid: "201904063",crn: "202020"},
    {id: 9,studentid: "201904064",crn: "202022"},
    {id: 10,studentid: "201904065",crn: "202022"},
    {id: 9,studentid: "201904066",crn: "202023"},
    {id: 10,studentid: "201904067",crn: "202023"}
  ];

  students: Student[] = [
    {id: 1,name: "Peter Yamout",studentid: "201904057",email:"pky00@mail.aub.edu",imagePath: ""},
    {id: 2,name: "Peter Yamoout",studentid: "201904058",email:"pky00@mail.aub.edu",imagePath: ""},
    {id: 3,name: "Peter Yamooout",studentid: "201904059",email:"pky00@mail.aub.edu",imagePath: ""},
    {id: 4,name: "Peter Yamoooout",studentid: "201904060",email:"pky00@mail.aub.edu",imagePath: ""},
    {id: 5,name: "Peter Yamooooout",studentid: "201904061",email:"pky00@mail.aub.edu",imagePath: ""},
    {id: 6,name: "Peter Yamouooooot",studentid: "201904062",email:"pky00@mail.aub.edu",imagePath: ""},
    {id: 7,name: "Peeter Yamout",studentid: "201904063",email:"pky00@mail.aub.edu",imagePath: ""},
    {id: 8,name: "Peeeter Yamout",studentid: "201904064",email:"pky00@mail.aub.edu",imagePath: ""},
    {id: 9,name: "Peeeeter Yamout",studentid: "201904065",email:"pky00@mail.aub.edu",imagePath: ""},
    {id: 10,name: "Peeeeeter Yamout",studentid: "201904066",email:"pky00@mail.aub.edu",imagePath: ""},
    {id: 11,name: "Peeeeeeeter Yamout",studentid: "201904067",email:"pky00@mail.aub.edu",imagePath: ""}
  ];

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

  addStudent(CRN:string,name: string,studentid: string,email:string,imagePath: string,isn:boolean = false,reg:boolean = false){
    this.students.forEach(std => {
      if(std.studentid===studentid){
        isn=true;
      }
    });
    if(isn===false){
      this.students.push({id: Student.lastid+1,name: name,studentid: studentid,email:email,imagePath: imagePath});
      Student.lastid++;
    }
    this.registrations.forEach(std => {
      if(std.studentid===studentid && std.crn === CRN){
        reg=true;
      }
    });
    if(reg===false){
      this.enrollStudent(CRN,studentid);
      this.getCourseStudents(CRN);
    }
  }

  editStudent(id: number,student: Student){
    this.students.forEach((std,i: number) => {
      if(std.id === id) {
        this.students[i] = student;
        console.log(this.students);
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

  constructor() { }
}
