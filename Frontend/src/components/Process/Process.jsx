import React from 'react';
import './Process.css';

function Process() {
  return (
    <section className="process-section">
      <h2>How we works ?</h2>
      <p className="process-desc">This is a process, how you can get loan for your self.</p>
      <div className="process-list">
        <div className="process-step">
          <div className="process-step-num">01</div>
          <div>
            <h3>Application</h3>
            <p>
              The borrower submits a loan application to the bank, either in person, online, or through other channels. The application includes personal and financial information, such as income, employment history, credit score, and the purpose of the loan.
            </p>
          </div>
          <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/money-2024772_1280.png" alt="Application" className="process-img" />
        </div>
        <div className="process-step">
          <div className="process-step-num">02</div>
          <div>
            <h3>Documentation and Verification</h3>
            <p>
              The bank requests supporting documents from the borrower, such as identification proof, income statements, bank statements, and collateral details (if applicable). The bank verifies the information provided to assess the borrower's creditworthiness and eligibility for the loan.
            </p>
          </div>
          <img src="https://cdn.pixabay.com/photo/2016/11/18/17/20/credit-card-1839895_1280.png" alt="Documentation" className="process-img" />
        </div>
        <div className="process-step">
          <div className="process-step-num">03</div>
          <div>
            <h3>Credit Assessment</h3>
            <p>
              The bank conducts a credit assessment to evaluate the borrower's creditworthiness and ability to repay the loan. This process involves analyzing the borrower's credit history, income stability, debt-to-income ratio, and other factors.
            </p>
          </div>
          <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/money-2024772_1280.png" alt="Credit Assessment" className="process-img" />
        </div>
        <div className="process-step">
          <div className="process-step-num">04</div>
          <div>
            <h3>Loan Approval</h3>
            <p>
              If the borrower meets the bank's lending criteria and passes the credit assessment, the loan is approved. The bank determines the loan amount, interest rate, repayment term, and any associated fees.
            </p>
          </div>
          <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/money-2024772_1280.png" alt="Loan Approval" className="process-img" />
        </div>
      </div>
    </section>
  );
}

export default Process;