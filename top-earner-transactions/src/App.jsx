import { useState, useEffect } from 'react'
import { getTransactions, submitTransactions } from './actions/transactions'
import ResponseMessage from './components/responseMessage/responseMessage'
import adpLogo from '/pngwing.com.png'
import './App.css'

function App() {
  //   Get all the transactions of last year's top earner. This means find the employee with the
  // highest sum total of amount within the prior calendar year. Prior calendar year means, if
  // it is currently 2024, we want only to consider transactions in 2023.

  // With last year's top earner's transactions get the transactionIDs where the type is alpha.

  // Once you have an id and an array of transactionIDs (should be an array of strings),
  // present this information on the UI together with the top earner employee name.

  const [shouldConfirm, setShouldConfirm] = useState(false);

  const [submitResponse, setSubmitResponse] = useState(null);
  const [finalData, setFinalData] = useState(null);
  const [id, setId] = useState(null);

  const currentYear = new Date().getFullYear();

  const submitData = async () => {
    console.log(finalData);
    const finalObject = { id: id, result: finalData.transactionsInfo }
    console.log(finalObject);
    const response = await submitTransactions(JSON.stringify(finalObject));
    console.log(response);
    setSubmitResponse(response);
    setShouldConfirm(false);
  }

  const callTransactionsData = async () => {
    let dictionaryEmployee = {};
    const lastYear = currentYear - 1;
    const response = await getTransactions();
    setId(response.id);
    response.transactions.forEach((elem) => {
      if (elem.timeStamp.substring(0, 4) == lastYear.toString()) {
        let obj = dictionaryEmployee[elem.employee.id];
        if (!obj) {
          obj = {
            totalAmount: elem.amount,
            employeeInfo: elem.employee,
            transactionsInfo: elem.type === "alpha" ? [elem.transactionID] : []
          }
          dictionaryEmployee[elem.employee.id] = obj;
        } else {
          obj.totalAmount = obj.totalAmount + elem.amount;
          if (elem.type === "alpha") { obj.transactionsInfo.push(elem.transactionID); }
          dictionaryEmployee[elem.employee.id] = obj
        }
      }
    });
    const employeeList = Object.values(dictionaryEmployee).sort((a, b) => b.totalAmount - a.totalAmount);
    console.log('lista > ', employeeList);
    setFinalData(employeeList[0]);
  }

  useEffect(() => {
    callTransactionsData();
  }, []);

  if (!finalData) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <>
      <div>
        <a href="https://www.adp.com/" target="_blank">
          <img src={adpLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <p> Congratulations </p>
      <h1>{finalData.employeeInfo.name}</h1>
      <p>you are the last year's top earner. Here are your transactions:</p>
      <div className="transaction-list">
        {
          finalData.transactionsInfo.map((item) =>
            <p key={item}>{item}</p>
          )
        }
      </div>
      <div className="card">
        {
          !shouldConfirm &&
          <button onClick={() => setShouldConfirm(true)}>
            Click here to submit transactions information
          </button>
        }
        {
          shouldConfirm &&
          <div>
            <button className="confirm-button" onClick={() => submitData()}>
              Confirm send transactions?
            </button>
            <button onClick={() => setShouldConfirm(false)}>
              Cancel
            </button>
          </div>
        }
      </div>
      {
        submitResponse && 
        <ResponseMessage response={submitResponse} />
      }
    </>
  )
}

export default App
