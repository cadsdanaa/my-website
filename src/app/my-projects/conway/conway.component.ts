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
  initialUniverse = {"Universe": ""};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  conwayHttp() {
    let ourHeaders = new HttpHeaders()
      .set('x-api-key', 'l5hvJ8BS937twqRflPlex7Jo4UaViNKB2UEb8dts')
    let universeToSend;

    if(this.universe.length == 0) {
      this.generateInitialUniverse();
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
      });
  }

  private generateInitialUniverse() {
    let initialUniverseString = "";
    const rand = this.mulberry32(this.randomSeed);
    for (let i = 0; i < 10; i++) {
      for(let j = 0; j < 10; j++) {
        const val = rand();
        initialUniverseString += (val%3==0 ? "X" : "-");
        if(i != 9 && j == 9) {
          initialUniverseString += "\n";
        }
      }
    }
    this.initialUniverse = {"Universe": initialUniverseString};
  }

  private mulberry32(seed: number) {
    return function() {
      let t = seed += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return Math.trunc((((t ^ t >>> 14) >>> 0) / 4294967296)*100000000);
    }
  }

}
