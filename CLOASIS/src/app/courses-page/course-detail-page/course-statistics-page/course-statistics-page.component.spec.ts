import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStatisticsPageComponent } from './course-statistics-page.component';

describe('CourseStatisticsPageComponent', () => {
  let component: CourseStatisticsPageComponent;
  let fixture: ComponentFixture<CourseStatisticsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseStatisticsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStatisticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
