import { Component, OnInit } from '@angular/core';
import { HistoryModel } from 'src/app/shared/history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  histories: HistoryModel[];

  constructor() {}

  ngOnInit(): void {
    this.loadHistories();
  }

  loadHistories() {
    this.histories = JSON.parse(localStorage.getItem('histories')) || [];
  }

  clearHistory() {
    localStorage.removeItem('histories');
    this.histories = [];
  }
}
