import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { CourseDetailPageComponent } from './courses-page/course-detail-page/course-detail-page.component';
import { CourseResolverService } from './services/course-resolver.service';
import { StudentListComponent } from './courses-page/course-detail-page/student-list/student-list.component';
import { AddStudentPageComponent } from './courses-page/course-detail-page/add-student-page/add-student-page.component';


const routes: Routes = [
  {path:'HOMEPAGE', component: HomePageComponent},
  {path:'COURSESPAGE', component: CoursesPageComponent},
  {path: 'COURSEDETAILPAGE/:coursecode', component: CourseDetailPageComponent, resolve: {course: CourseResolverService},children: [
    {path:'', component: StudentListComponent},
    {path:'AddStudent', component: AddStudentPageComponent}]},
  {path:'STUDENTSPAGE', component: StudentsPageComponent},
  {path: '**', redirectTo: 'HOMEPAGE'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
