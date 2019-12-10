import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/services/repository';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  stocks: Array<Stock>;
  stocksSumByPaymentDate: number;
  isEditMode: boolean = false;

  constructor(private repo: Repository) { }

  ngOnInit() {
    this.initStocks();
    this.calculateStocks();
  }

  toggleEditMode() {
    this.isEditMode = true;
  }

  save() {
    this.isEditMode = false;
    this.repo.stocks = this.stocks;
    this.calculateStocks();
  }

  cancel() {
    this.isEditMode = false;
    this.initStocks();
    this.calculateStocks();
  }

  private calculateStocks() {
    let sum: number = 0;
    this.stocks.forEach((stock) => {
      sum += stock.count * stock.purchasePricePerStock;
    });
    this.stocksSumByPaymentDate = sum;
  }

  private initStocks() {
    this.stocks = this.repo.stocks;
  }
}
