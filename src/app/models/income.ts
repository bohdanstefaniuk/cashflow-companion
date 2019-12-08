import { Business } from './business';

export class Income {
	salary: number;
	smallBusinesses: Array<Business>;
	bigBusinesses: Array<Business>;
	realEstates: Array<Business>;

	constructor() {
		this.smallBusinesses = new Array<Business>();
		this.bigBusinesses = new Array<Business>();
		this.realEstates = new Array<Business>();
	}
}