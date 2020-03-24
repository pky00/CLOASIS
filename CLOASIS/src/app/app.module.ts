import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { CourseDetailPageComponent } from './courses-page/course-detail-page/course-detail-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseService } from './services/course.service';
import { CourseResolverService } from './services/course-resolver.service';
import { StudentListComponent } from './courses-page/course-detail-page/student-list/student-list.component';
import { AddStudentPageComponent } from './courses-page/course-detail-page/add-student-page/add-student-page.component';
import { EditStudentComponent } from './courses-page/course-detail-page/edit-student/edit-student.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CoursesPageComponent,
    StudentsPageComponent,
    CourseDetailPageComponent,
    SidebarComponent,
    NavbarComponent,
    StudentListComponent,
    AddStudentPageComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [CourseService,CourseResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
