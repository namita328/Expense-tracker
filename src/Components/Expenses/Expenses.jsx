import React from "react";
import styles from "./Expense.module.css";

const Expenses = () => {
  return (
    <div className={styles.expenseContainer}>
      <p>Expenses : </p>
      <button> + Add Expense</button>
    </div>
  );
};

export default Expenses;
