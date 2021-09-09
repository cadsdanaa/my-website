import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css'],
})
export class MyProjectsComponent implements OnInit {

  universe = [] as string[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  conwayHttp() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    };
    this.http.get("https://raspberrypi-secure-web-protocol.at.remote.it:30001/conway", httpOptions).subscribe(res => {
      let resObject = res as any;
      this.universe = resObject['Universe'].split("\n");
    })
  }
}
