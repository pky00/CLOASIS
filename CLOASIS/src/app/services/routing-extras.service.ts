import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingExtrasService {

  coursePage = new Subject<string>();

  setCoursePage(i: string){
    this.coursePage.next(i);
  }

  constructor() { }
}
