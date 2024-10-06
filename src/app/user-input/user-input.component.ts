import { Component,EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // calculate = output<InvestmentInput>();

  // Two-way-binding
  enteredInitialInvestment = "0";
  enteredAnnualInvestment = "0";
  enteredExpectedReturn = "5";
  enteredDuration = "1";

  // signals
  // no modification in html file bcs ngmodel support it
  // enteredInitialInvestment = signal("0");
  // enteredAnnualInvestment = signal("0");
  // enteredExpectedReturn = signal("5");
  // enteredDuration = signal("1");
  // injectable import
  constructor(private invetmentService: InvestmentService) {};
  onSubmit() {
    // with services
    this.invetmentService.CalculateInvestmentResults({
        initialInvestment: +this.enteredInitialInvestment,
        duration: +this.enteredDuration,
        expectedReturn: +this.enteredExpectedReturn,
        annualInvestment: + this.enteredAnnualInvestment,
        // signals
        // initialInvestment: +this.enteredInitialInvestment(),
        // duration: +this.enteredDuration(),
        // expectedReturn: +this.enteredExpectedReturn(),
        // annualInvestment: + this.enteredAnnualInvestment(),
      });
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment,
    //   duration: +this.enteredDuration,
    //   expectedReturn: +this.enteredExpectedReturn,
    //   annualInvestment: + this.enteredAnnualInvestment,
    //   // signals
    //   // initialInvestment: +this.enteredInitialInvestment(),
    //   // duration: +this.enteredDuration(),
    //   // expectedReturn: +this.enteredExpectedReturn(),
    //   // annualInvestment: + this.enteredAnnualInvestment(),
    // });

    // resetting values with signals
    // this.enteredAnnualInvestment.set("0")
    // this.enteredDuration.set("1")
    // this.enteredInitialInvestment.set("0")
    // this.enteredExpectedReturn.set("5")
  }
}
