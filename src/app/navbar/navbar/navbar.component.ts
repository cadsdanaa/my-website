import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items = [] as MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
        {
          label: "About Me",
          routerLink: "/about-me"
        },
        {
          label: "Other"
        }
      ]
  }

}
