import { Income } from '../models/income';
import { Outcome } from '../models/outcome';
import { Business } from '../models/business';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ObjectUtilities } from '../common/objectUtilities';

@Injectable({
	providedIn: 'root',
})
export class Repository {
	private _outcome: Outcome;
	private _income: Income;
	private _user: User;
	onDataChanged:EventEmitter<any> = new EventEmitter<any>();

	constructor() {
		this.clearAll();
		this._income.salary = 1000;
		this._outcome.childCount = 2;
		this._outcome.outcomePerChild = 150;
		this._outcome.rent = 570;
		this._income.smallBusinesses.push(new Business(450));
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

//#endregion

//#region Methods: Public

	clearAll() {
		this.income = new Income();
		this.outcome = new Outcome();
		this.user = new User();
		this.emitDataChangedEvent();
	}

//#endregion

//#region Methods: Private

	private emitDataChangedEvent() {
		this.onDataChanged.emit(null);
	}

	private cleanZeroBusinesses() {
		let filter = (element: Business) => { return element.cashflow != 0}; 
		this._income.bigBusinesses = this._income.bigBusinesses.filter(filter);
		this._income.realEstates = this._income.realEstates.filter(filter);
		this._income.smallBusinesses = this._income.smallBusinesses.filter(filter);
	}

//#endregion

}