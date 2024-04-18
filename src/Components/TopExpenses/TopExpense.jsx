import styles from "./TopExpense.module.css";
import React, { Fragment } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TopExpense = ({ expenses }) => {
  if (!expenses || expenses.length === 0) {
    return (
      <div className={styles.container}>
        <h2>Top Expenses</h2>
        <div className={styles.defaultContainer}>
        <p>No expenses to display.</p>
        </div>
      </div>
    );
  }

  const sortedExpenses = expenses.slice().sort((a, b) => b.amount - a.amount);

  return (
    <div className={styles.container}>
      <h2>Top Expenses</h2>
      <div className={styles.topExpContainer}>
        <Fragment>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={sortedExpenses}
              margin={{
                top: 20,
                right: 30,
                left: 40,
                bottom: 5,
              }}
              layout="vertical"
            >
              <XAxis type="number" />
              <YAxis dataKey="title" type="category" />
              <Tooltip />
              <Bar dataKey="amount" barSize={25} fill="#8784d2" />
            </BarChart>
          </ResponsiveContainer>
        </Fragment>
      </div>
    </div>
  );
};

export default TopExpense;
