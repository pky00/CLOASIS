import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamManagerPageComponent } from './team-manager-page.component';

describe('TeamManagerPageComponent', () => {
  let component: TeamManagerPageComponent;
  let fixture: ComponentFixture<TeamManagerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamManagerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
