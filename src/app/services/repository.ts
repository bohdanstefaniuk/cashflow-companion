import { Income } from '../models/income';
import { Outcome } from '../models/outcome';
import { Business } from '../models/business';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ObjectUtilities } from '../common/objectUtilities';
import { Stock } from '../models/stock';

@Injectable({
	providedIn: 'root',
})
export class Repository {
	private _outcome: Outcome;
	private _income: Income;
	private _user: User;
	private _stocks: Array<Stock>;
	private _isInitialized: boolean;

	onDataChanged:EventEmitter<any> = new EventEmitter<any>();

	constructor() {
		this.init();
	}

	public init() {
		this.restoreFromLocalStorage();
		this._isInitialized = false;
		this.onDataChanged.emit(null);
	}

	public clear() {
		this.clearLocalStorage();
		this.restoreFromLocalStorage();
		this._isInitialized = false;
		this.onDataChanged.emit(null);
	}

//#region Properties

	public get user() : User {
		return this._user;
	}

	public set user(value: User) {
		this._user = value;
		this.emitDataChangedEvent();
	}

	public get outcome() : Outcome {
		return this._outcome;
	}

	public set outcome(value: Outcome) {
		this._outcome = ObjectUtilities.copy(value);
		this.emitDataChangedEvent();
	}

	public get income() : Income {
		return ObjectUtilities.copy(this._income);
	}

	public set income(value: Income) {
		this._income = ObjectUtilities.copy(value);
		this.cleanZeroBusinesses();
		this.emitDataChangedEvent();
	}

	public get stocks() : Array<Stock> {
		return ObjectUtilities.copy(this._stocks);
	}

	public set stocks(value: Array<Stock>) {
		this._stocks = ObjectUtilities.copy(value);
	}

	public get isInitialized(): boolean {
		return this._isInitialized;
	}

//#endregion

//#region Methods: Private

	private emitDataChangedEvent() {
		this.onDataChanged.emit(null);
		this._isInitialized = true;
		this.saveToLocalStorage();
	}

	private cleanZeroBusinesses() {
		let filter = (element: Business) => { return element.cashflow != 0}; 
		this._income.bigBusinesses = this._income.bigBusinesses.filter(filter);
		this._income.realEstates = this._income.realEstates.filter(filter);
		this._income.smallBusinesses = this._income.smallBusinesses.filter(filter);
	}

	private saveToLocalStorage() {
		localStorage.setItem("income", JSON.stringify(this._income));
		localStorage.setItem("outcome", JSON.stringify(this._outcome));
		localStorage.setItem("user", JSON.stringify(this._user));
		localStorage.setItem("stocks", JSON.stringify(this._stocks));
	}

	private restoreFromLocalStorage() {
		this._income = this.restoreItem("income") || new Income();
		this._outcome = this.restoreItem("outcome") || new Outcome();
		this._user = this.restoreItem("user") || new User();
		this._stocks = this.restoreItem("stocks") || this.getDefaultStocks();
	}

	private clearLocalStorage() {
		localStorage.clear();
	}

	private restoreItem(name: string): any {
		let item = localStorage.getItem(name);
		if (item) {
			this._isInitialized = true;
			return JSON.parse(item);
		} 
		return null
	}
	
	private getDefaultStocks(): Array<Stock> {
		let stocks = new Array<Stock>();
		stocks.push(new Stock("УКТ"));
		stocks.push(new Stock("КРС"));
		stocks.push(new Stock("КЧГ"));
		stocks.push(new Stock("ЯКХЗ"));
		stocks.push(new Stock("ДР"));
		return stocks;
	}

//#endregion

}