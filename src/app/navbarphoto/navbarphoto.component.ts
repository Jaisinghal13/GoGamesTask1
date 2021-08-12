import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarphoto',
  templateUrl: './navbarphoto.component.html',
  styleUrls: ['./navbarphoto.component.css'],
})
export class NavbarphotoComponent implements OnInit {
  username: string = 'JAI SINGHAL';
  count = 0;
  constructor() {}
  transform(value: string): any {
    return value.trim();
  }

  ngOnInit(): void {}
}
