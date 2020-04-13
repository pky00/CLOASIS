import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import { Team } from '../models/team.model';
import { Subject } from 'rxjs';
import { Student } from '../models/student.model';
import { TeamMember } from '../models/teamMember.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  getTeams = new Subject<Team[]>();

  teams: Team[] = [
    {teamId:1,crn:"202020",title:"Cloasis",description:"Student Managment System",progress:75,members:[
      {teamId:1,studentId:"201904057",name:"Peter Yamout",imgpath:""},
      {teamId:1,studentId:"201904058",name:"Peter Yamoout",imgpath:""},
      {teamId:1,studentId:"201904059",name:"Peter Yamooout",imgpath:""}
    ]},
    {teamId:2,crn:"202020",title:"Clinic",description:"Clinic Managment System",progress:60,members:[
      {teamId:2,studentId:"201904060",name:"Peter Yamoooout",imgpath:""},
      {teamId:2,studentId:"201904061",name:"Peter Yamooooout",imgpath:""},
      {teamId:2,studentId:"201904062",name:"Peter Yamoooooout",imgpath:""}
    ]},
  ];

  constructor(private courseService:CourseService) { }
}
