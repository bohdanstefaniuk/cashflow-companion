import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/services/repository';
import { Income } from 'src/app/models/income';
import { Business } from 'src/app/models/business';
import { ObjectUtilities } from 'src/app/services/objectUtilities';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  income: Income;
  isEditMode: boolean = false;

  constructor(private repo: Repository) { }

  ngOnInit() {
    this.income = this.repo.income;
  }

  toggleEditMode() {
    this.isEditMode = true;
  }

  save() {
    this.isEditMode = false;
    this.repo.income = this.income;
  }

  addSmallBusiness() {
    this.addBusiness(this.income.smallBusinesses);
  }

  addBigBusiness() {
    this.addBusiness(this.income.bigBusinesses);
  }

  addRealEstate() {
    this.addBusiness(this.income.realEstates);
  }

  private addBusiness(businessArray: Array<Business>) {
    this.toggleEditMode();
    businessArray.push(new Business(0));
  }

  cancel() {
    this.isEditMode = false;
    this.income = this.repo.income;
  }
}
