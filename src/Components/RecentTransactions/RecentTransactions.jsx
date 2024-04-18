import React, { useState } from "react";
import styles from "./RecentTransactions.module.css";
import ExpenseCard from "./ExpenseCard/ExpenseCard";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const RecentTransactions = ({ expenses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 3;
  const totalPages = Math.ceil(expenses.length / elementsPerPage);

  const paginateExpenses = (page, elementsPerPage) => {
    const startIndex = (page - 1) * elementsPerPage;
    const endIndex = Math.min(startIndex + elementsPerPage, expenses.length);
    return expenses.slice(startIndex, endIndex);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleDelete = (id) => {
    // Remove the expense with the given id from the expenses array
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    // Update the state with the new array of expenses
    expenses(updatedExpenses);
  };

  const currentExpenses = paginateExpenses(currentPage, elementsPerPage);

  return (
    <div className={styles.primaryContainer}>
      <h2>Recent Transactions</h2>
      <div className={styles.transactionContainer}>
        {currentExpenses.map((expense, index) => (
          <ExpenseCard key={index} expense={expense} onDelete={handleDelete} />
        ))}

        <div className={styles.pagination}>
          <button className={styles.pageBtns} onClick={goToPreviousPage}>
            <BsArrowLeft size={16} />
          </button>
          <p className={styles.pageNumber}>{currentPage}</p>
          <button className={styles.pageBtns} onClick={goToNextPage}>
            <BsArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
