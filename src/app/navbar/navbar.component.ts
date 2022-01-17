import { Component, OnInit } from '@angular/core';
import { SelectItem } from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items = [] as SelectItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
        {
          label: "About Me",
          value: "/"
        },
        {
          label: "My Projects",
          value: "/projects"
        },
        {
          label: "Resume",
          value: "/resume"
        }
      ]
  }

}
