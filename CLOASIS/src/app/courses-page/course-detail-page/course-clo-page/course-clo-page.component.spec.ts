import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCLOPageComponent } from './course-clo-page.component';

describe('CourseCLOPageComponent', () => {
  let component: CourseCLOPageComponent;
  let fixture: ComponentFixture<CourseCLOPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCLOPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCLOPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
