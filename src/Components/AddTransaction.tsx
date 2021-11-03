// import React, { useContext } from "react";
// import { UserContext } from "../Components/Context/GlobalState";


// export const AddTransaction: React.FC<{}> = () => {
//   const { dispatch } = useContext(UserContext);

//   // const [text, SetText] = React.useState<string>("");
//   const [amount, Setamount] = React.useState<number>(0);

 

  

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const today = new Date();
//     const current_date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//     dispatch({
//       type: "ADD_AMOUNT_TRANSACTION",
//       payload: {
//         date: current_date,
//         time: "",
//         id: Math.floor(Math.random() * 10000),
//         text: "Add",
//         amount,
//       },
//     });
    

//     Setamount(0);
//   };

//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <div className="form-controls">
//           <label htmlFor="amount">
//             Enter the Amount <br />
//           </label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => {
//               Setamount(parseInt(e.target.value));
//             }}
//             placeholder="Enter amount..."
//           />
//         </div>
//         <button className="btn" id="addBtn">Add</button>
//         <button className="btn" id="removeBtn">Remove</button>
//       </form>
//     </>
//   );
// };





import React, { useContext, Component, MouseEvent } from "react";
import { UserContext } from "../Components/Context/GlobalState";


export const AddTransaction: React.FC<{}> = () => {
  const { dispatch } = useContext(UserContext);

  // const [text, SetText] = React.useState<string>("");
  const [amount, Setamount] = React.useState<number>(0);

 

  

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const today = new Date();
    const current_date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    dispatch({
      type: "ADD_AMOUNT_TRANSACTION",
      payload: {
        date: current_date,
        time: "",
        id: Math.floor(Math.random() * 10000),
        text: "Add",
        amount,
      },
    });
    

    Setamount(0);
  };

  
  
    const addButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
  
      const button: HTMLButtonElement = event.currentTarget;

      const today = new Date();
    const current_date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    dispatch({
      type: "ADD_AMOUNT_TRANSACTION",
      payload: {
        date: current_date,
        time: "",
        id: Math.floor(Math.random() * 10000),
        text: button.value,
        amount,
      },
    });
    

    Setamount(0);

    };

    const removeButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
  
      const button: HTMLButtonElement = event.currentTarget;

      const today = new Date();
    const current_date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    dispatch({
      type: "ADD_AMOUNT_TRANSACTION",
      payload: {
        date: current_date,
        time: "",
        id: Math.floor(Math.random() * 10000),
        text: button.value,
        amount,
      },
    });
    

    Setamount(0);

    };
      

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-controls">
          <label htmlFor="amount">
            Enter the Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              Setamount(parseInt(e.target.value));
            }}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" id="addBtn" onClick={addButtonHandler} value="Add">Add</button>
        <button className="btn" id="removeBtn" onClick={removeButtonHandler} value="Remove">Remove</button>
      </form>
    </>
  );
};