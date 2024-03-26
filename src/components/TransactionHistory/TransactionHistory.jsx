import "./TransactionHistory.css";
// import FriendListItem from "./FriendListItem";

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

        <tbody>
          {items.map((item) => (
            <>
              <tr className="info-row">
                <td className="info-column">{item.type} </td>
                <td className="info-column">{item.amount}</td>
                <td className="info-column">{item.currency}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
