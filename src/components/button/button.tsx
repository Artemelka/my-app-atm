import React, {
  memo, SyntheticEvent,
  useCallback,
} from 'react';
import { noop } from '../../utils/noop';
import { ButtonEventType } from './types';
import './button.css';

type ButtonPropsType = {
  id?: string;
  onClick?: (buttonEvent: ButtonEventType) => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
};

export const Button = memo(({
  id,
  onClick = noop,
  text,
  type = 'button'
}: ButtonPropsType) => {
  const handleClick = useCallback((event: SyntheticEvent<HTMLButtonElement>) => {
    onClick({ event, id })
  }, [id, onClick]);

  return (
    <button
      className="Button"
      onClick={handleClick}
      type={type}
    >
      {text}
    </button>
  );
});