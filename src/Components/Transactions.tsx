import React, { useContext } from 'react';
import { UserContext } from '../Components/Context/GlobalState';
type Second = {
  date: string;
  time: string;
  id: number;
  text: string;
  amount: number;
  
};

export const Transactionss: React.FC<Second> = props => {
  const { dispatch } = useContext(UserContext);

  return (
    <li className={props.amount < 0 ? 'minus' : 'plus'}>
        {props.date}
        {"T"+props.time}
        {"."+props.id}
        {" - "+Math.abs(props.amount)+" - "}
        {props.text} 
    </li>
  );
};