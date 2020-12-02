import React, {
  FormEvent,
  memo,
  useCallback,
  useState,
} from 'react';
import { Input } from '../input';
import { Button } from '../button';
import { InputEventType } from "../input/types";
import './form.css';

type FormPropsType = {
  onSubmit: (values: string) => void;
};

export const Form = memo(({ onSubmit }: FormPropsType) => {
  const [value, setValue] = useState('');
  const [isError, setError] = useState(false);

  const handleChange = useCallback(({ value }: InputEventType) => {
    setError(false);
    setValue(value)
  }, []);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();

    if(+value % 10 !== 0) {
      setError(true);
      return;
    }

    onSubmit(value);
  }, [onSubmit, value]);

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label className="Form__label" htmlFor="amount">
        Please enter amount
        <span className="Form__warning">* must be a multiple of 10</span>
      </label>
      <Input
        onChange={handleChange}
        id="amount"
        isError={isError}
        value={value}
        name="amount"
      />
      {isError && (
        <span className="Form__error">
          Enter correct amount
        </span>
      )}
      <Button type="submit" text="Submit"/>
    </form>
  );
});