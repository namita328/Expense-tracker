import React, { useState } from "react";
import styles from "./WalletMoney.module.css";
import AddIncomeModal from "../WalletMoney/AddIncomeModal";

const WalletMoney = ({
  currentBalance,
  mainBalance,
  setMainBalance,
  setCurrentBalance,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [newBalance, setNewBalance] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setNewBalance("");
  };

  const handleAddBalance = () => {
    const parsedAmount = parseInt(newBalance);
    if (!isNaN(parsedAmount)) {
      setCurrentBalance(currentBalance + parsedAmount);
      setMainBalance(mainBalance + parsedAmount);
      closeModal();
    }
  };

  return (
    <>
      <div className={styles.walletContainer}>
        <p>Wallet Money : ₹ {mainBalance}</p>
        <button onClick={openModal}>+ Add Income</button>
      </div>
      {showModal && (
        <AddIncomeModal
          onClose={closeModal}
          handleAddBalance={handleAddBalance}
          setNewBalance={setNewBalance}
        />
      )}
    </>
  );
};

export default WalletMoney;
