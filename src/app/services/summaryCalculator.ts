import { Repository } from './repository'
import { Summary } from '../models/total'
import { Business } from '../models/business';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class SummaryCalculator {
	constructor(private repository: Repository) { }

	public getSummary(): Summary {
		const total = new Summary();
		const totalPassiveIncome = this.getTotalPassiveIncome();
		const totalActiveIncome = this.getTotalActiveIncome();
		const totalOutcomes = this.getTotalOutcomes();
		total.activeIncome = totalActiveIncome;
		total.passiveIncome = totalPassiveIncome;
		total.totalOutcome = totalOutcomes;
		total.totalIncome = totalActiveIncome + totalPassiveIncome;
		total.totalPay = total.totalIncome - totalOutcomes;
		return total;
	}

	private getTotalPassiveIncome(): number {
		const incomes = this.repository.income;
		let total = 0;
		total += this.getBusinessSum(incomes.smallBusinesses);
		total += this.getBusinessSum(incomes.bigBusinesses);
		total += this.getBusinessSum(incomes.realEstates);
		return total;
	}

	private getTotalActiveIncome(): number {
		const incomes = this.repository.income;
		return incomes.salary;
	}

	private getTotalOutcomes(): number {
		const outcomes = this.repository.outcome;
		let total = outcomes.childCount * outcomes.outcomePerChild;
		for (let key in outcomes) {
			if (key == "childCount" || key == "outcomePerChild") {
				continue;
			}
			total += outcomes[key];
		}
		return total;
	}

	private getBusinessSum(array: Array<Business>) {
		var total = 0;
		if (!array) {
			return total;
		}
		for (var i = 0, _len = array.length; i < _len; i++) {
			total += array[i].cashflow
		}
		return total
	}
}