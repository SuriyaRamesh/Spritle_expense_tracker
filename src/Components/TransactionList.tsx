import React, { useContext } from 'react';
import { UserContext } from '../Components/Context/GlobalState';
import { Transactionss } from './Transactions';

export const TransactionList: React.FC<{}> = () => {
  const { state } = useContext(UserContext);
  const { transactions } = state;
  return (
    <>
      <h3>Transactions : </h3>
      <ul id='list' className='list'>
        {transactions.map(transaction => (
          <Transactionss key={transaction.id} {...transaction} />
        ))}
      </ul>
    </>
  );
};