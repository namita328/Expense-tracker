import React from "react";
import styles from "./LandingPage.module.css";
import ExpensePieChart from "../ExpensePieChart/ExpensePieChart";
import RecentTransactions from "../RecentTransactions/RecentTransactions";
import WalletMoney from "../WalletMoney/WalletMoney";
import Expenses from "../Expenses/Expenses";
import TopExpense from "../TopExpenses/TopExpense";

const LandingPage = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <h1>Expense Tracker</h1>
        <div className={styles.secondContainer}>
          <WalletMoney />
          <Expenses />
          <ExpensePieChart />
        </div>
        <div className={styles.secondaryContainer}>
          <RecentTransactions />
          <TopExpense />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
