import React from "react";
import styles from "./TopExpense.module.css";

const TopExpense = () => {
  return (
    <div>
      <h2>Top Expenses</h2>
      <div className={styles.topExpContainer}></div>
    </div>
  );
};

export default TopExpense;
