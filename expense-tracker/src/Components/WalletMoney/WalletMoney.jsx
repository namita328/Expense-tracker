import React, { useState } from "react";
import styles from "./WalletMoney.module.css";
import AddIncomeModal from "../WalletMoney/AddIncomeModal";

const WalletMoney = () => {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [showModal, setShowModal] = useState(false);

  const handleAddIncome = (amount) => {
    const newBalance = walletBalance + amount;
    setWalletBalance(newBalance);
    // You can add localStorage persistence here
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={styles.walletContainer}>
        <p>Wallet Money : {walletBalance}</p>
        <button onClick={toggleModal}>+ Add Income</button>
      </div>
      {showModal && (
        <AddIncomeModal onClose={toggleModal} onAddIncome={handleAddIncome} />
      )}
    </>
  );
};

export default WalletMoney;
