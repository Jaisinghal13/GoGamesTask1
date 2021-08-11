import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-homemodel',
  templateUrl: './homemodel.component.html',
  styleUrls: ['./homemodel.component.css'],
})
export class HomemodelComponent implements OnInit {
  constructor() {}

  ename;
  employees = {
    employee: [
      {
        id: 1,
        job_role: 'Infosys-Game Artist',
        job_type: 'Full-time',
        job_location: 'Hyderabad',
        start_date: 'Infosys, 10th August',
        experience: '3-5 years',
      },
      {
        id: 2,
        job_role: 'Infosys-Game',
        job_type: 'Part-time',
        job_location: 'Jaipur',
        start_date: 'Lorem Ipsum 20th August',
        experience: '4-5 years',
      },
      {
        id: 3,
        job_role: 'Infosys',
        job_type: 'Internship',
        job_location: 'Udaipur',
        start_date: 'Before 30th August',
        experience: '3-6 years',
      },
      {
        id: 4,
        job_role: 'Infosys-Artist',
        job_type: 'Trainee',
        job_location: 'Kota',
        start_date: 'Before 10th September',
        experience: '3-8 years',
      },
      {
        id: 5,
        job_role: 'Infosys-India',
        job_type: 'Mumbai',
        job_location: 'Hyderabad',
        start_date: 'Before 10th October',
        experience: '3-10 years',
      },
    ],
  };
  ngOnInit(): void {}
}
