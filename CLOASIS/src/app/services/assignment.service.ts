import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
assignments: Assignment[]=[
  {clo_id:"5", course_crn: "22041", report_id: "1", description: "Assignment 1"},
  {clo_id:"6", course_crn: "22041", report_id: "2", description: "Assignment 2"}
];

get_assignments(crn: string){
  var assignments: Assignment[]=[];
  this.assignments.forEach((assignment,i:number)=>{
    if (assignment.course_crn===crn){
      assignments.push(assignment);
    }
  })

  return assignments
}

  constructor() { }
}
