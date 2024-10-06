import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import type { InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
})
export class AppComponent {
  resultsData?: {
    year: number,
    valueEndOfYear: number,
    interest: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested:number,
  }[];

  //signals
  // resultsData = signal<{
  //   year: number,
  //   valueEndOfYear: number,
  //   interest: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested:number,
  // }[]| undefined>(undefined);


}
