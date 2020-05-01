import { Injectable } from '@angular/core';
import { Report } from '../models/report.model';
import { CLO } from '../models/clo.model';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  reports: Report[]=[
    {report_id:"1",report_date:"01-01-01"},
    {report_id:"2",report_date:"01-01-01"},
    {report_id:"3",report_date:"01-01-01"},
    {report_id:"4",report_date:"01-01-01"}
  ];
  clos: CLO[]=[
    {clo_id:"1", course_crn: "22041", report_id: "1", description: "Lecture 1"},
    {clo_id:"2", course_crn: "22041", report_id: "2", description: "Lecture 2"},
    {clo_id:"3", course_crn: "22041", report_id: "3", description: "Lecture 3"},
    {clo_id:"4", course_crn: "22041", report_id: "4", description: "Lecture 4"}
  ];

  get_clos(crn: string){
    var clos: CLO[]=[];
    this.clos.forEach((clo,i:number)=>{
      if (clo.course_crn===crn){
        clos.push(clo);
      }
    })

    return clos
  }

  get_date(id:string){
    var date: string;
    this.reports.forEach((report,i:number)=>{
      if (report.report_id===id){
        console.log(id)
        date=report.report_date
      }
    })

    return date
  }

 


  constructor() { }
}
