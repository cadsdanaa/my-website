import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AboutMeComponent} from "./aboutme/about-me/about-me.component";

const routes: Routes = [
  {path: 'about-me', component: AboutMeComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }