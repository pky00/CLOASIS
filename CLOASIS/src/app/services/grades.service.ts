import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Registration } from '../models/registration.model';
import { Student } from '../models/student.model';
import { Grades } from '../models/grades.model';
import { CGD } from '../models/courseGradeDistribution.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  gradesEmmitter = new Subject<Grades[]>();
  cgdEmitter = new Subject<CGD[]>();

  grades: Grades[] = [
    {id: 1,studentId: "201904057",crn: "202020",assignment1:80,assignment2:90,midterm:70,final:85},
    {id: 2,studentId: "201904058",crn: "202020",assignment1:70,assignment2:60,midterm:50,final:95},
    {id: 3,studentId: "201904059",crn: "202020",assignment1:70,assignment2:50,midterm:80,final:35},
    {id: 4,studentId: "201904060",crn: "202021",assignment1:90,assignment2:90,midterm:100,final:75},
    {id: 5,studentId: "201904061",crn: "202021",assignment1:85,assignment2:80,midterm:75,final:95},
    {id: 6,studentId: "201904062",crn: "202021",assignment1:84,assignment2:100,midterm:60,final:25},
    {id: 7,studentId: "201904063",crn: "202020",assignment1:80,assignment2:90,midterm:90,final:45},
    {id: 8,studentId: "201904064",crn: "202022",assignment1:80,assignment2:90,midterm:70,final:85},
    {id: 9,studentId: "201904065",crn: "202022",assignment1:80,assignment2:90,midterm:70,final:85},
    {id: 10,studentId: "201904066",crn: "202023",assignment1:80,assignment2:90,midterm:70,final:85},
    {id: 11,studentId: "201904067",crn: "202023",assignment1:80,assignment2:90,midterm:70,final:85}
  ];

  CGDs: CGD[] = [
    {crn:"202020",assignment1:15,assignment2:15,midterm:30,final:40},
    {crn:"202021",assignment1:10,assignment2:10,midterm:25,final:55},
    {crn:"202022",assignment1:15,assignment2:25,midterm:30,final:30},
    {crn:"202023",assignment1:10,assignment2:25,midterm:25,final:40}
  ];

  constructor() { }
}
