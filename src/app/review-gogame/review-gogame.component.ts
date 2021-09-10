import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-gogame',
  templateUrl: './review-gogame.component.html',
  styleUrls: ['./review-gogame.component.css'],
})
export class ReviewGogameComponent implements OnInit {
  constructor() {}
  count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  games = {
    game: [
      {
        id: 1,
        game_name: 'PUBG',
        game_type: 'Fighting',
        game_description:
          ' Contrary to popular belief, Lorem Ipsum is not simply random text. n classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 2,
        game_name: 'Freefire',
        game_type: 'Action',
        game_description:
          'Lorem Ipsum is not simply random text. It has roots in a piece of classical pden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word n classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 3,
        game_name: 'Dota',
        game_type: 'Fight',
        game_description:
          ' belief, Lorem Ipsum is not simply random text. It has roots in a piece of mpden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 4,
        game_name: 'COD',
        game_type: 'Callonduty',
        game_description:
          'It has roots in a piece of classical Latin literature from 45 BC, making it p one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 5,
        game_name: 'Battleground',
        game_type: 'Battle',
        game_description:
          'Battle Ground Contrary to popular belief, Lorem Ipsum is not simply random text. It ampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 6,
        game_name: 'FOJI',
        game_type: 'Fighting',
        game_description:
          'FOJI is Contrary to popular belief, Lorem Ipsum is not simply random text. It has ck, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 7,
        game_name: 'Temple Run',
        game_type: 'Kids',
        game_description:
          'Temple run Contrary to popular belief, Lorem Ipsum is not simply random text. It chard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 8,
        game_name: 'Subway Suffers',
        game_type: 'Kids',
        game_description:
          ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 9,
        game_name: 'World War',
        game_type: 'War',
        game_description:
          ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
      {
        id: 10,
        game_name: 'Modern Strike',
        game_type: 'Strike',
        game_description:
          ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the  word in classical literature, discovered the undoubtable source. (The Extremes of Good and Evil) by Cicero, written in45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsu                                      Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
      },
    ],
    feedback: [
      { feedbackId: 1, feedbackType: 'Good' },
      { feedbackId: 2, feedbackType: 'Not for appealing' },
      { feedbackId: 3, feedbackType: 'Terrible' },
      { feedbackId: 4, feedbackType: 'The best I have seen' },
      {
        feedbackId: 5,
        feedbackType: 'Should put more efforts on character design',
      },
    ],
  };

  ngOnInit(): void {}
}
