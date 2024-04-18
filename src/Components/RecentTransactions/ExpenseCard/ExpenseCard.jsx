import styles from "./ExpenseCard.module.css";
import { CiCircleRemove } from "react-icons/ci";
import { MdModeEdit } from "react-icons/md";

const ExpenseCard = ({ expense }) => {
  const dateFormat = (date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return "Invalid Date";
    }

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${months[month]} ${day}, ${year}`;
  };

  return (
    <div className={styles.expenseCard}>
      <div className={styles.iconAndTitle}>
        <div className={styles.titleAndDate}>
          <p className={styles.title}>{expense.title}</p>

          <p className={styles.date}>{dateFormat(expense.date)}</p>
        </div>
      </div>

      <div className={styles.priceAndUpdate}>
        <p className={styles.price}>₹{expense.amount}</p>

        <button className={styles.deleteBtn}>
          <CiCircleRemove size={25} />
        </button>
        <button className={styles.editBtn}>
          <MdModeEdit size={30} />
        </button>
      </div>
    </div>
  );
};

export default ExpenseCard;
