import React from 'react';
import './Transactions.css';

const Transactions = ({ items }) => {
  return (
    <div className="transaction-history-wrapper">
      <table className="transaction-history">
        <thead className="transaction-head">
          <tr>
            <th className="th-item">Type</th>
            <th className="th-item">Amount</th>
            <th className="th-item">Currency</th>
          </tr>
        </thead>
        <tbody className="transaction-body">
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className="transaction-row">
              <td className="td-item">{type}</td>
              <td className="td-item">{amount}</td>
              <td className="td-item">{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
