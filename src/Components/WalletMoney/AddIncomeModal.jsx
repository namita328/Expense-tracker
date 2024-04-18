import React, { useState } from "react";
import styles from "./AddIncomeModal.module.css";

const AddIncomeModal = ({ onClose, handleAddBalance, setNewBalance }) => {
  const [income, setIncome] = useState("");

  const handleInputChange = (event) => {
    setIncome(event.target.value);
    setNewBalance(event.target.value);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Add Balance</h2>
        <div className={styles.addbalance}>
          <div className={styles.inputContainer}>
            <input
              type="number"
              placeholder="Enter amount"
              value={income}
              onChange={handleInputChange}
            />
            <button onClick={handleAddBalance}>Add Balance</button>
            <button onClick={onClose} style={{ backgroundColor: "#780000" }}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIncomeModal;
