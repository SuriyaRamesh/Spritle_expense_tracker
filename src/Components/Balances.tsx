import React, { useContext } from 'react';
import { UserContext } from '../Components/Context/GlobalState';

export const Balances: React.FC<{}> = () => {
  const { state } = useContext(UserContext);
  const { transactions } = state;
  const amounts = transactions.map(transaction => transaction.amount);
  const initial = 0;
  const total = amounts.reduce(
    (previous, current) => (previous += current),
    initial,
  );
  return (
    <div id="balance-detail">
      <h2>Balance : </h2>
      <h2 id='balance'>{" "+total}</h2>
    </div>
  );
};