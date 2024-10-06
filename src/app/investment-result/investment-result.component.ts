import { CurrencyPipe } from '@angular/common';
import { Component, inject, input, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  // with signals
  // results = input<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested:number,
  // }>()

  // @Input() results?: {
  //   year: number,
  //   valueEndOfYear: number,
  //   interest: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested:number,
  // }[];

  private investmentService = inject(InvestmentService);
  get results() {
    return this.investmentService.resultsData;
  }
}
