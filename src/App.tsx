import React from "react";
import { Header } from './Components/Header';
import "./App.css";

import { TransactionList } from "./Components/TransactionList";
import { Balances } from "./Components/Balances";
import { AddTransaction } from "./Components/AddTransaction";
import { GlobalState } from "./Components/Context/GlobalState";

const App: React.FC<{}> = () => {
    return (
        <GlobalState>
            <Header />
            <div className="containers">
                <Balances />
                <AddTransaction />
                {/* <IncomeExpenses /> */}
                <TransactionList />
                
            </div>
        </GlobalState>
    );
};

export default App;