import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-profile',
  templateUrl: './banner-profile.component.html',
  styleUrls: ['./banner-profile.component.css'],
})
export class BannerProfileComponent implements OnInit {
  username: string = 'JAI SINGHAL';
  time: string = 'MEMEBER SINCE Jun 26, 2021';
  constructor() {}

  ngOnInit(): void {}
}
