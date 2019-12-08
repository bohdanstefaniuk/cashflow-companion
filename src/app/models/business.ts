import * as uuid from 'uuid';

export class Business {
	id: string;
	cashflow: number;

	constructor(cashflow: number) {
		this.id = uuid.v4();
		this.cashflow = cashflow;
	}
}