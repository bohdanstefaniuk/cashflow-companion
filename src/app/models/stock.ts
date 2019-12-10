export class Stock {
	count: number;
	purchasePricePerStock: number;
	name: string;

	constructor(name: string) {
		this.count = 0;
		this.purchasePricePerStock = 0;
		this.name = name;
	}
}