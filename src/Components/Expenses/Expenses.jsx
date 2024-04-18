import React, { useState } from "react";
import styles from "./Expense.module.css";
import AddExpenseModal from "./AddExpenseModal";

const Expenses = ({ walletBalance, setWalletBalance, onAddExpense }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState(1000);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleAddExpense = (expenseData) => {
    const parsedAmount = parseFloat(expenseData.amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    setExpenses([...expenses, expenseData]);
    onAddExpense(expenseData);
    setIncome(income - parsedAmount);
    setWalletBalance(walletBalance - parsedAmount);
  };

  return (
    <div className={styles.expenseContainer}>
      <p>
        Expenses: ₹{" "}
        {expenses.reduce((total, expense) => total + expense.amount, 0)}
      </p>
      <button onClick={openModal}>+ Add Expense</button>
      {isModalOpen && (
        <AddExpenseModal onClose={closeModal} onAddExpense={handleAddExpense} />
      )}
    </div>
  );
};

export default Expenses;
