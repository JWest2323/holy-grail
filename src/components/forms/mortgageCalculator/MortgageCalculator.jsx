import '../../css/MortgageCalculator.css'
import { useState } from "react";

const MortgageCalculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalPayment, setTotalPayment] = useState("");
  const [totalInterest, setTotalInterest] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    // Get and convert input values
    const loanAmount = parseFloat(data.get("loan-amount"));
    const monthlyInterestRate = parseFloat(
      data.get("interest-rate") / 100 / 12
    );
    const loanTermInMonths = parseFloat(data.get("loan-term")) * 12;

    // Calculate monthly mortgage payment
    const monthlyPaymentAmount =
      (loanAmount * monthlyInterestRate) /
      (1 - 1 / Math.pow(1 + monthlyInterestRate, loanTermInMonths));

    const totalPayment = monthlyPaymentAmount * loanTermInMonths;

    const currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    // Display monthly payment amount
    setMonthlyPayment(currencyFormatter.format(monthlyPaymentAmount));

    // Display total payment amount
    setTotalPayment(currencyFormatter.format(totalPayment));

    // Display total interest amount
    setTotalInterest(currencyFormatter.format(totalPayment - loanAmount));
  };

  return (
    <div className="mortgage-calculator">
      <form
        onSubmit={(event) => onSubmit(event)}
        className="mortgage-calculator-form"
      >
        <div>
          <label htmlFor="loan-amount">
            Loan Amount:{" "}
            <input
              type="number"
              name="loan-amount"
              id="loan-amount"
              defaultValue="400000"
              min="1"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="loan-term">
            Loan Term (years):{" "}
            <input
              type="number"
              name="loan-term"
              id="loan-term"
              defaultValue="15"
              min="1"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="interest-rate">
            Interest Rate (%):{" "}
            <input
              type="number"
              name="interest-rate"
              id="interest-rate"
              defaultValue="3"
              step="0.01"
              min="0.01"
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Calculate</button>
        </div>
      </form>

      <hr />
      <div aria-live="polite" className="mortgage-calculator-results">
        <div>
          Monthly Payment Amount:{" "} 
          <strong>{monthlyPayment}</strong>
        </div>
        <div>
          Total Payment Amount:{" "} 
          <strong>{totalPayment}</strong>
        </div>
        <div>
          Total Interest Paid:{" "} 
          <strong>{totalInterest}</strong>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
