import { Component, OnInit } from '@angular/core';
import { SummaryCalculator } from 'src/app/services/summaryCalculator';
import { Repository } from 'src/app/services/repository';
import { Summary } from 'src/app/models/summary';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  summary: Summary;

  constructor(public calculator: SummaryCalculator,
    private repo: Repository) {
  }

  ngOnInit() {
    this.summary = this.calculator.getSummary();
    this.repo.onDataChanged.subscribe(() => {
      this.summary = this.calculator.getSummary();
    });
  }

}
