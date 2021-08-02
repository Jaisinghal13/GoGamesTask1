import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-home-google',
  templateUrl: './home-google.component.html',
  styleUrls: ['./home-google.component.css'],
})
export class HomeGoogleComponent implements OnInit {
  @Pipe({
    name: 'trim',
    pure: false,
  })
  username: string;
  count = 0;
  constructor() {}
  transform(value: string): any {
    return value.trim();
  }
  ngOnInit(): void {}
}
