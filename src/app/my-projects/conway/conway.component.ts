import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conway',
  templateUrl: './conway.component.html',
  styleUrls: ['./conway.component.css']
})
export class ConwayComponent implements OnInit {

  randomSeed = 123;
  universe = [] as string[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  conwayHttp() {
    let ourHeaders = new HttpHeaders()
      .set('x-api-key', 'l5hvJ8BS937twqRflPlex7Jo4UaViNKB2UEb8dts')
    let universeToSend;

    if(this.universe.length == 0) {
      this.generateInitialUniverse();
    } else {
      let temp = this.universe.join("\n");
      temp = temp.substr(0, temp.length-1);
      universeToSend = {"Universe": temp};
      this.http.post("https://si4cjeooo3.execute-api.us-east-2.amazonaws.com/default/conway", universeToSend, {headers: ourHeaders})
        .subscribe(res => {
          let resObject = res as any;
          this.universe = resObject['Universe'].split("\n");
        });
    }
  }

  private generateInitialUniverse() {
    this.universe = [""];
    let ourHeaders = new HttpHeaders()
      .set('x-api-key', 'l5hvJ8BS937twqRflPlex7Jo4UaViNKB2UEb8dts')
    this.http.get("https://si4cjeooo3.execute-api.us-east-2.amazonaws.com/default/conway?seed=" + this.randomSeed, {headers: ourHeaders, observe: 'response'})
      .subscribe(res => {
        let resObject = res as any;
        this.universe = resObject.body['Universe'].split("\n");
      });
  }


}
