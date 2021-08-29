import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import { AppRoutingModule } from './app-routing.module';
import { AboutMeComponent } from './aboutme/about-me/about-me.component';
import { MyProjectsComponent } from './projects/my-projects/my-projects.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent,
    MyProjectsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    MenubarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
