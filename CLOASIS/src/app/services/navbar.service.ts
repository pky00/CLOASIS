import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  isInCourseDetailPage= new Subject<boolean>();

  gotoCourseDetailPage(){
    this.isInCourseDetailPage.next(true);
  }

  leftCourseDetailPage(){
    this.isInCourseDetailPage.next(false);
  }


  constructor() { }
}
