import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-slide',
  templateUrl: './navbar-slide.component.html',
  styleUrls: ['./navbar-slide.component.css'],
})
export class NavbarSlideComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onTabClick(evt) {
    this.setLineTab(evt.target);
    console.log('EVENT', evt);
  }

  setLineTab(tab) {
    let line = document.querySelector<HTMLSelectElement>(' .tabs2 > .line');
    line.style.left = tab.offsetLeft + 'px';
    line.style.width = tab.clientWidth + 'px';
  }
}
