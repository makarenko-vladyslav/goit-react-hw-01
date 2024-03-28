import css from "./TransactionHistory.module.css";
import React from "react";

export default function TransactionHistory({ items }) {
  return (
    <div className={"section"}>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.titles}>Type</th>
            <th className={css.titles}>Amount</th>
            <th className={css.titles}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <React.Fragment key={item.id}>
              <tr className={css.row}>
                <td className={css.column}>{item.type} </td>
                <td className={css.column}>{item.amount}</td>
                <td className={css.column}>{item.currency}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
