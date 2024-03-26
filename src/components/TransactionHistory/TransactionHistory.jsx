import "./TransactionHistory.css";
import React from "react";

export default function TransactionHistory({ items }) {
  return (
    <div className="section">
      <table className="table">
        <thead>
          <tr>
            <th className="table-titles">Type</th>
            <th className="table-titles">Amount</th>
            <th className="table-titles">Currency</th>
          </tr>
        </thead>

        {items.map((item) => (
          <React.Fragment key={item.id}>
            <tbody>
              <tr className="info-row">
                <td className="info-column">{item.type} </td>
                <td className="info-column">{item.amount}</td>
                <td className="info-column">{item.currency}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
}
