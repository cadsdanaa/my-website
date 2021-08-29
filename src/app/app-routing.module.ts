import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AboutMeComponent} from "./about-me/about-me.component";
import {MyProjectsComponent} from "./my-projects/my-projects.component";
import {ResumeComponent} from "./resume/resume.component";

const routes: Routes = [
  {path: 'me', component: AboutMeComponent},
  {path: 'projects', component: MyProjectsComponent},
  {path: 'resume', component: ResumeComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
