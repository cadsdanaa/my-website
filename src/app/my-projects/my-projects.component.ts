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
    this.http.get("http://conwaygohttp-env.eba-mgfrwrzx.us-east-2.elasticbeanstalk.com/conway", httpOptions).subscribe(res => {
      let resObject = res as any;
      this.universe = resObject['Universe'].split("\n");
    })
  }
}
