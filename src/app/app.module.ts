import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ResumeComponent } from './resume/resume.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConwayComponent } from './my-projects/conway/conway.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent,
    MyProjectsComponent,
    ResumeComponent,
    ConwayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
