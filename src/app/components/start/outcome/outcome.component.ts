import { Component, OnInit } from '@angular/core';
import { Outcome } from 'src/app/models/outcome';
import { Repository } from 'src/app/services/repository';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Calculator } from 'src/app/services/calculator';

@Component({
  selector: 'app-outcome-input',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss']
})
export class OutcomeInputComponent implements OnInit {
  outcome: Outcome;
  inputForm: FormGroup = new FormGroup({
    "rent": new FormControl(),
    "houseRental": new FormControl(),
    "houseLoan": new FormControl(),
    "carLoan": new FormControl(),
    "food": new FormControl(),
    "education": new FormControl(),
    "trainings": new FormControl(),
    "clothes": new FormControl(),
    "transport": new FormControl(),
    "phone": new FormControl(),
    "childCount": new FormControl(),
    "outcomePerChild": new FormControl()
  });

  constructor(private repo: Repository, 
    private router: Router) { }

  onSubmit() {
    this.repo.outcome = this.inputForm.value;
    this.router.navigate(["/game"]);
  }

  onReturn() {
    this.router.navigate(["/income"]);
  }

  ngOnInit() {
    this.inputForm.reset(this.repo.outcome);
  }
}
