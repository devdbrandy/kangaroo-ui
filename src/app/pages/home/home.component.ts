import { Component } from '@angular/core';
import { HistoryModel } from '../../shared/history.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  kangarooOne: number;
  metreOne: number;
  kangarooTwo: number;
  metreTwo: number;
  result: string;

  histories: HistoryModel[] = [];

  constructor() {}

  onChange() {
    if (
      Number.isInteger(+this.kangarooOne) &&
      Number.isInteger(+this.metreOne) &&
      Number.isInteger(+this.kangarooTwo) &&
      Number.isInteger(+this.metreTwo)
    ) {
      const fields = [
        +this.kangarooOne,
        +this.metreOne,
        +this.kangarooTwo,
        +this.metreTwo
      ];

      this.kangarooJump(fields);
      this.storeHistory(fields);
    }
  }

  kangarooJump(args) {
    let [x1, v1, x2, v2] = args;

    if (v2 > v1) {
      return (this.result = 'NO');
    }

    for (let i = 0; i < 1000; i++) {
      if (x1 + v1 === x2 + v2) {
        return (this.result = 'YES');
      }
      x1 += v1;
      x2 += v2;
    }
    return (this.result = 'NO');
  }

  storeHistory(fields) {
    const history = new HistoryModel(fields, this.result);

    this.histories.push(history);
    localStorage.setItem('histories', JSON.stringify(this.histories));
  }
}
