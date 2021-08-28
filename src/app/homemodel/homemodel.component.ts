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
  global_Id: number = 1;
  index_Id: number = 0;
  flag: boolean = false;

  employees = {
    employee: [
      {
        id: 1,
        company: 'Infosys',
        job_role: 'Game Artist',
        job_type: 'Full-time',
        job_location: 'Hyderabad',
        start_date: 'Infosys, 10th August',
        experience: '3-5 years',
        job_description:
          ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 2,
        company: 'Infosys',
        job_role: 'Game',
        job_type: 'Full-time',
        job_location: 'Jaipur',
        start_date: 'Lorem Ipsum 20th August',
        experience: '4-5 years',
        job_description:
          'Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  ',
      },
      {
        id: 3,
        company: 'Infosys',
        job_role: 'Power',
        job_type: 'Full-time',
        job_location: 'Udaipur',
        start_date: 'Before 30th August',
        experience: '3-6 years',
        job_description:
          ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 4,
        company: 'Infosys',
        job_role: 'Artist',
        job_type: 'Full-time',
        job_location: 'Kota',
        start_date: 'Before 10th September',
        experience: '3-8 years',
        job_description:
          'Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  ',
      },
      {
        id: 5,
        company: 'Infosys',
        job_role: 'India',
        job_type: 'Full-time',
        job_location: 'Hyderabad',
        start_date: 'Before 10th October',
        experience: '3-10 years',
        job_description:
          ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 6,
        company: 'Infosys',
        job_role: 'Star',
        job_type: 'Part-time',
        job_location: 'Hyderabad',
        start_date: 'Infosys, 10th August',
        experience: '3-5 years',
        job_description:
          'Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  ',
      },
      {
        id: 7,
        company: 'Infosys',
        job_role: 'Game',
        job_type: 'Part-time',
        job_location: 'Jaipur',
        start_date: 'Lorem Ipsum 20th August',
        experience: '4-5 years',
        job_description:
          ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 8,
        company: 'Infosys',
        job_role: 'Power',
        job_type: 'Part-time',
        job_location: 'Udaipur',
        start_date: 'Before 30th August',
        experience: '3-6 years',
        job_description:
          'Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  ',
      },
      {
        id: 9,
        company: 'Infosys',
        job_role: 'Star',
        job_type: 'Part-time',
        job_location: 'Kota',
        start_date: 'Before 10th September',
        experience: '3-8 years',
        job_description:
          ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 10,
        company: 'Infosys',
        job_role: 'India',
        job_type: 'Part-time',
        job_location: 'Hyderabad',
        start_date: 'Before 10th October',
        experience: '3-10 years',
        job_description:
          'Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  ',
      },
      {
        id: 11,
        company: 'Infosys',
        job_role: 'Game Artist',
        job_type: 'Freelance',
        job_location: 'Hyderabad',
        start_date: 'Infosys, 10th August',
        experience: '3-5 years',
        job_description:
          ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 12,
        company: 'Infosys',
        job_role: 'Game',
        job_type: 'Freelance',
        job_location: 'Jaipur',
        start_date: 'Lorem Ipsum 20th August',
        experience: '4-5 years',
        job_description:
          'Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  ',
      },
      {
        id: 13,
        company: 'Infosys',
        job_role: 'Companies',
        job_type: 'Freelance',
        job_location: 'Udaipur',
        start_date: 'Before 30th August',
        experience: '3-6 years',
        job_description:
          ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 14,
        company: 'Infosys',
        job_role: 'Artist',
        job_type: 'Freelance',
        job_location: 'Kota',
        start_date: 'Before 10th September',
        experience: '3-8 years',
        job_description:
          'Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  ',
      },
      {
        id: 15,
        company: 'Infosys',
        job_role: 'India',
        job_type: 'Freelance',
        job_location: 'Hyderabad',
        start_date: 'Before 10th October',
        experience: '3-10 years',
        job_description:
          ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
    ],
  };
  employees_temp = {
    employee: [
      {
        id: 1,
        company: 'Infosys',
        job_role: 'Game Artist',
        job_type: 'Full-time',
        job_location: 'Hyderabad',
        start_date: 'Infosys, 10th August',
        experience: '3-5 years',
        job_description:
          ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 2,
        company: 'Infosys',
        job_role: 'Game',
        job_type: 'Full-time',
        job_location: 'Jaipur',
        start_date: 'Lorem Ipsum 20th August',
        experience: '4-5 years',
        job_description:
          'Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  ',
      },
      {
        id: 3,
        company: 'Infosys',
        job_role: 'Power',
        job_type: 'Full-time',
        job_location: 'Udaipur',
        start_date: 'Before 30th August',
        experience: '3-6 years',
        job_description:
          ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 4,
        company: 'Infosys',
        job_role: 'Artist',
        job_type: 'Full-time',
        job_location: 'Kota',
        start_date: 'Before 10th September',
        experience: '3-8 years',
        job_description:
          'Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  n 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  ',
      },
      {
        id: 5,
        company: 'Infosys',
        job_role: 'India',
        job_type: 'Full-time',
        job_location: 'Hyderabad',
        start_date: 'Before 10th October',
        experience: '3-10 years',
        job_description:
          ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
    ],
  };

  ngOnInit(): void {}
  onClickPrevious() {
    if (this.flag == false) {
      this.employees_temp.employee = [];
      if (this.global_Id == 1) {
        var index = this.global_Id - 1;
        for (let i = index; i < this.global_Id * 5; i++)
          this.employees_temp.employee.push(this.employees.employee[i]);
      } else {
        var index = (this.global_Id - 2) * 5;
        for (let i = index; i < (this.global_Id - 1) * 5; i++)
          this.employees_temp.employee.push(this.employees.employee[i]);

        this.global_Id--;
      }
    }
  }
  onClickNext() {
    if (this.flag == false) {
      this.employees_temp.employee = [];
      if (this.global_Id == 3) {
        var index = (this.global_Id - 1) * 5;
        for (let i = index; i < this.global_Id * 5; i++)
          this.employees_temp.employee.push(this.employees.employee[i]);
      } else {
        var index = this.global_Id * 5;
        for (let i = index; i < (this.global_Id + 1) * 5; i++)
          this.employees_temp.employee.push(this.employees.employee[i]);

        this.global_Id++;
      }
    }
  }
  onContentChange(e) {
    if (this.flag == false) {
      console.log(e);
      this.employees_temp.employee = [];
      this.global_Id = e;
      var index = (e - 1) * 5;
      for (let i = index; i < e * 5; i++)
        this.employees_temp.employee.push(this.employees.employee[i]);
      console.log(this.employees_temp);
    }
  }
  onSeeDetail(e) {
    this.index_Id = e;
  }
  onFullTimeJob() {
    this.employees_temp.employee = [];
    for (let i = 0; i < this.employees.employee.length; i++) {
      if (this.employees.employee[i].job_type == 'Full-time') {
        this.employees_temp.employee.push(this.employees.employee[i]);
      }
    }
    this.flag = true;
  }
  onPartTimeJob() {
    this.employees_temp.employee = [];
    for (let i = 0; i < this.employees.employee.length; i++) {
      if (this.employees.employee[i].job_type == 'Part-time') {
        this.employees_temp.employee.push(this.employees.employee[i]);
      }
    }
    this.flag = true;
  }
  onFreelanceJob() {
    console.log('Conso');
    this.employees_temp.employee = [];
    for (let i = 0; i < this.employees.employee.length; i++) {
      if (this.employees.employee[i].job_type == 'Freelance') {
        this.employees_temp.employee.push(this.employees.employee[i]);
      }
    }
    this.flag = true;
  }
  onAllJob() {
    this.employees_temp.employee = [];
    this.flag = false;
    this.global_Id = 1;
    for (let i = 0; i < 5; i++)
      this.employees_temp.employee.push(this.employees.employee[i]);
  }
}
