import { Component } from '@angular/core';

@Component({
  selector: 'app-scrollspy',
  templateUrl: './scrollspy.component.html',
  styleUrls: ['./scrollspy.component.css'],
})
export class ScrollspyComponent {
  constructor() {}

  ngOnInit(): void {}

  // toHome() {
  //   document.getElementById('home').scrollIntoView();
  //   document.getElementById('nav-aboutus').classList.remove('active');
  //   document.getElementById('nav-contact').classList.remove('active');
  //   document.getElementById('nav-customer').classList.remove('active');
  //   var element = document.getElementById('nav-home');
  //   element.className += ' active';
  // }
  // toAboutus() {
  //   document.getElementById('aboutus').scrollIntoView();
  //   document.getElementById('nav-home').classList.remove('active');
  //   document.getElementById('nav-contact').classList.remove('active');
  //   document.getElementById('nav-customer').classList.remove('active');
  //   var element = document.getElementById('nav-aboutus');
  //   element.className += ' active';
  // }
  // toContact() {
  //   document.getElementById('contact').scrollIntoView();
  //   document.getElementById('nav-home').classList.remove('active');
  //   document.getElementById('nav-aboutus').classList.remove('active');
  //   document.getElementById('nav-customer').classList.remove('active');
  //   var element = document.getElementById('nav-contact');
  //   element.className += ' active';
  // }
  // toCustomer() {
  //   document.getElementById('customer').scrollIntoView();
  //   document.getElementById('nav-home').classList.remove('active');
  //   document.getElementById('nav-aboutus').classList.remove('active');
  //   document.getElementById('nav-contact').classList.remove('active');
  //   var element = document.getElementById('nav-customer');
  //   element.className += ' active';
  // }
  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section).scrollIntoView();
  }
}
