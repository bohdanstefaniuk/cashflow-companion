import { Component, OnInit } from '@angular/core';
import { Calculator } from 'src/app/services/calculator';
import { Repository } from 'src/app/services/repository';
import { Summary } from 'src/app/models/total';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {
  summary: Summary;

  constructor(public calculator: Calculator,
    private repo: Repository) {
  }

  ngOnInit() {
    this.summary = this.calculator.getSummary();
    this.repo.onDataChanged.subscribe(() => {
      this.summary = this.calculator.getSummary();
    });
  }

}
