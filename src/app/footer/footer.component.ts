import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToLinkedIn(): void {
    window.location.href = "https://www.linkedin.com/in/alex-dana-907a74193/";
  }

  goToGithub(): void {
    window.location.href = "https://github.com/cadsdanaa";
  }

}
