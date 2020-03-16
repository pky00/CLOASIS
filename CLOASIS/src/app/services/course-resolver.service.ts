import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseService } from './course.service';

interface course {crn: string, name: string, coursecode: string, room: string, professor: string, progress: string}

@Injectable()
export class CourseResolverService implements Resolve<course>{
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<course> | Promise<course> | course {
    return this.courseService.getCourse(route.params['coursecode']);
  }
  constructor(private courseService: CourseService) { }
}
