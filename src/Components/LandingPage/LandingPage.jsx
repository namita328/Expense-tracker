import React, { useState } from "react";
import styles from "./LandingPage.module.css";
// import ExpensePieChart from "../ExpensePieChart/ExpensePieChart";
import RecentTransactions from "../RecentTransactions/RecentTransactions";
import WalletMoney from "../WalletMoney/WalletMoney";
import Expenses from "../Expenses/Expenses";
import TopExpense from "../TopExpenses/TopExpense";
// import { categoryData } from "../../assets/mockData";

const LandingPage = () => {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [mainBalance, setMainBalance] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expenseData) => {
    setExpenses([...expenses, expenseData]);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <h1>Expense Tracker</h1>
        <div className={styles.secondContainer}>
          <WalletMoney
            currentBalance={currentBalance}
            mainBalance={mainBalance}
            setMainBalance={setMainBalance}
            setCurrentBalance={setCurrentBalance}
          />
          <Expenses
            walletBalance={mainBalance}
            setWalletBalance={setMainBalance}
            onAddExpense={addExpense}
          />
          {/* <ExpensePieChart expenses={expenses} categoryData={categoryData} /> */}
        </div>
        <div className={styles.secondaryContainer}>
          <RecentTransactions expenses={expenses} />
          <TopExpense expenses={expenses} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
