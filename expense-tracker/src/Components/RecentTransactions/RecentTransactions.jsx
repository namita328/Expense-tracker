import React from "react";
import styles from "./RecentTransactions.module.css";

const RecentTransactions = () => {
  return (
    <div className={styles.primaryContainer}>
      <h2>Recent Transaction</h2>
      <div className={styles.transactionContainer}></div>
    </div>
  );
};

export default RecentTransactions;
