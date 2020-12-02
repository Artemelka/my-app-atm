import React, { memo, useCallback, useState } from 'react';
import { Table, Form, ErrorBlock } from './components';
import { getCash } from './utils/get-cash';
import { getAmountFromResult } from './utils/get-amount-from-result';
import { CashType } from './types';
import './app.css';

const ATM_STACK = {
  denomination: [10, 50, 100, 500, 1000, 5000],
  availability: [4, 2, 6, 3, 9, 2],
}
const DEFAULT_ERROR_STATE = { isError: false, errorMessage: ''};

export const App = memo(() => {
  const [result, setResult] = useState<CashType>([]);
  const [error, setError] = useState(DEFAULT_ERROR_STATE);
  const [amount, setAmount] = useState('');

  const handleClick = useCallback(() => {
    setError(DEFAULT_ERROR_STATE);
  }, []);

  const setErrorHelper = useCallback((errorMessage: string) => {
    setError({ isError: true, errorMessage });
    setResult([]);
    setAmount('');
  }, []);

  const setResponse = useCallback((response) => {
    const sum = getAmountFromResult(response);

    setResult(response);
    setAmount(`${sum}`);
  }, []);

  const handleSubmit = useCallback((value: string) => {
    const response = getCash(+value, ATM_STACK.denomination, ATM_STACK.availability);

    if (response.length === 0) {
      setErrorHelper('Enter amount less');
      return;
    }

    setResponse(response)
  }, [setErrorHelper, setResponse]);

  return (
    <div className="App">
      <div className="App__container">
        <h1 className="App__header">
          An example of an ATM operation code implementation
        </h1>
        <div className="App__content">
          {error.isError
            ? <ErrorBlock onClick={handleClick} title={error.errorMessage}/>
            : <Form onSubmit={handleSubmit}/>
          }
          <Table items={result} amount={amount}/>
        </div>
      </div>
    </div>
  );
});
