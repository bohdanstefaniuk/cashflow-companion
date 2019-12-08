import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/services/repository';
import { Outcome } from 'src/app/models/outcome';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss']
})
export class OutcomeComponent implements OnInit {
  outcome: Outcome

  constructor(private repo: Repository) { }

  ngOnInit() {
    this.outcome = Object.create(this.repo.outcome);
  }
}
