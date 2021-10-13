import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
})
export class EcommerceComponent implements OnInit {
  username: string = 'JAI SINGHAL';
  count = 0;
  countCard = [1, 2, 3, 4, 5, 6];
  constructor() {}
  transform(value: string): any {
    return value.trim();
  }

  ngOnInit(): void {}
}
