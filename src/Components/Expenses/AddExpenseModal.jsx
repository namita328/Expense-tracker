import React, { useState } from "react";
import styles from "./AddExpenseModal.module.css";

const AddExpenseModal = ({ onClose, onAddExpense }) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const handleAddExpense = () => {
    const formattedDate = new Date(expenseDate);

    if (expenseTitle.trim() !== "" && expenseAmount.trim() !== "") {
      onAddExpense({
        title: expenseTitle,
        amount: parseFloat(expenseAmount),
        category: expenseCategory,
        date: formattedDate,
      });
      onClose();
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Add Expense</h2>
        <div className={styles.addExpenseForm}>
          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="Expense Title"
              value={expenseTitle}
              onChange={(e) => setExpenseTitle(e.target.value)}
            />
            <input
              type="number"
              placeholder="Expense Amount"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
            />
          </div>
          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="Category"
              value={expenseCategory}
              onChange={(e) => setExpenseCategory(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date"
              value={expenseDate}
              onChange={(e) => setExpenseDate(e.target.value)}
            />
          </div>
          <div className={styles.buttonRow}>
            <button onClick={handleAddExpense}>Add Expense</button>
            <button onClick={onClose} style={{ backgroundColor: "#780000" }}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseModal;
