import React, {
  memo,
  SyntheticEvent,
  useCallback,
} from 'react';
import './input.css';
import { InputEventType } from './types';

type InputPropsType = {
  id: string;
  isError: boolean;
  name: string;
  onChange: (inputEvent: InputEventType) => void;
  value: string;
}

export const Input = memo(({ id, isError, name, onChange, value }: InputPropsType) => {
  const handleChange = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
    onChange({ event, value: event.currentTarget.value, name})
  }, [onChange, name]);

  return (
    <input
      className={isError ? 'Input Input--error' : 'Input'}
      id={id}
      name={name}
      onChange={handleChange}
      type="text"
      value={value}
    />
  );
});