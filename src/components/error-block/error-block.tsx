import React, { memo } from 'react';
import { Button } from '../button';
import './error-block.css';

type ErrorBlockPropsType = {
  onClick: () => void;
  title: string;
}

export const ErrorBlock = memo(({ onClick, title }: ErrorBlockPropsType) => {
  return (
    <div className="Error-block">
      <div className="Error-block__title">{title}</div>
      <div className="Error-block__action">
        <Button onClick={onClick} text="Return to form"/>
      </div>
    </div>
  );
});