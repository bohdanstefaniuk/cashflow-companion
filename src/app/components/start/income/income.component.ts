import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repository } from 'src/app/services/repository';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-income-input',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeInputComponent implements OnInit {
  inputForm: FormGroup = new FormGroup({
    "salary": new FormControl("", [Validators.required])
  });

  constructor(private router: Router, 
    private repository: Repository) {}

  ngOnInit() {
    this.inputForm.reset(this.repository.income);
  }

  onReturn() {
    this.router.navigate(["/user"]);
  }

  onSubmit() {
    this.repository.income = this.inputForm.value;
    this.router.navigate(["/outcome"]);
  }
}
