import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-homemodel',
  templateUrl: './homemodel.component.html',
  styleUrls: ['./homemodel.component.css'],
})
export class HomemodelComponent implements OnInit {
  constructor() {}
  headers = [1, 2, 3, 4, 5];
  ename;
  ngOnInit(): void {}
}
