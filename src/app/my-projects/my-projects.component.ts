import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css'],
})
export class MyProjectsComponent implements OnInit {

  universe = [] as string[];
  initialUniverse = {"Universe":
      "X-----XXX-\n" +
      "XX-------X\n" +
      "-XX----XXX\n" +
      "-XX------X\n" +
      "-XX------X\n" +
      "-XXX--X--X\n" +
      "-XX--XX--X\n" +
      "-XX------X\n" +
      "-XX-XXX--X\n" +
      "---------X"
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  conwayHttp() {
    let ourHeaders = new HttpHeaders()
      .set('x-api-key', 'l5hvJ8BS937twqRflPlex7Jo4UaViNKB2UEb8dts')
    let universeToSend;
    if(this.universe.length == 0) {
      universeToSend = this.initialUniverse;
    } else {
      let temp = this.universe.join("\n");
      temp = temp.substr(0, temp.length-1);
      universeToSend = {"Universe": temp};
    }
    this.http.post("https://si4cjeooo3.execute-api.us-east-2.amazonaws.com/default/conway", universeToSend, {headers: ourHeaders})
      .subscribe(res => {
      let resObject = res as any;
      this.universe = resObject['Universe'].split("\n");
    })
  }
}
