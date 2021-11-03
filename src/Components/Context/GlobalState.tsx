// import React, { createContext , useReducer , Dispatch } from "react";
import React, { useReducer , Dispatch } from "react";
// export const UserContext = createContext({ });

// import { First } from "../../types";
// import { Actions } from "../../types";

type First = {
    transactions: {
        date: string;
        time: string;
        id: number;
        amount: number;
        text: string;
    }[];
  }

  type Actions =
  | {
      type: "ADD_AMOUNT_TRANSACTION";
      payload: { date: string; time: string; id: number | any; amount: number; text: string };
    }
  | {
      type: "REMOVE_AMOUNT_TRANSACTION";
      payload: { date: string; time: string; id: number | any; amount: number; text: string };
    };

  const initialState: First = {
    transactions: [
      // { date: "2020-11-3", time: "12:35:20", id: 1, amount: 100, text: "Add"  },
      // { date: "2020-11-3", time: "12:35:30", id: 2, amount: 500, text: "Add" },
      // { date: "2020-11-3", time: "12:35:35", id: 3, amount: 50, text: "Remove" },
    ],
  };
  
//   export const UserContext = React.createContext<{state: First}>({ state: initialState});

export const UserContext = React.createContext<{
    state: First;
    dispatch: Dispatch<Actions>;
  }>({ state: initialState, dispatch: () => null });
  


  


    const reducer = (state: First, action: Actions) => {
        switch (action.type) {
          case "ADD_AMOUNT_TRANSACTION":
            return {
              ...state,
              transactions: [
                ...state.transactions,
                {
                  date: action.payload.date,
                  time: action.payload.time,
                  id: action.payload.id,
                  amount: action.payload.amount,
                  text: action.payload.text,
                },
              ],
            };
          case "REMOVE_AMOUNT_TRANSACTION":
            return {
                ...state,
                transactions: [
                  ...state.transactions,
                  {
                    date: action.payload.date,
                    time: action.payload.time,
                    id: action.payload.id,
                    amount: action.payload.amount,
                    text: action.payload.text,
                  },
                ],
            };
      
          default:
            return state;
        }
      };
      

      export const GlobalState: React.FC<{}> = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
      
        return (
          <UserContext.Provider value={{ state, dispatch }}>
            {children}
          </UserContext.Provider>
        );
      };
      

  
