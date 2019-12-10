import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/services/repository';
import { Outcome } from 'src/app/models/outcome';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss']
})
export class OutcomeComponent implements OnInit {
  outcome: Outcome;
  isEditMode: boolean = false;
  constructor(private repo: Repository) { }

  ngOnInit() {
    this.outcome = this.repo.outcome;
  }

  toggleEditMode() {
    this.isEditMode = true;
  }

  save() {
    this.isEditMode = false;
    this.repo.outcome = this.outcome;
  }

  addChild() {
    if (this.outcome.childCount < 3) {
      this.outcome.childCount++;
      this.save();
    }
  }

  removeChild() {
    if (this.outcome.childCount > 0) {
      this.outcome.childCount--;
      this.save();
    }
  }

  cancel() {
    this.isEditMode = false;
    this.outcome = this.repo.outcome;
  }
}
