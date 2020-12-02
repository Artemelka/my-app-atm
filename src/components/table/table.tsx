import React, { memo } from 'react';
import { CashType } from '../../types';
import './table.css';

type TablePropsType = {
  amount: string;
  items: CashType;
}

export const Table = memo(({ amount, items }: TablePropsType) => (
  <table className="Table">
    <thead className="Table__head">
      <tr className="Table__row Table__row--header">
        <th className="Table__cell">denomination</th>
        <th className="Table__cell">quantity</th>
      </tr>
    </thead>
    <tbody className="Table__body">
      {items.map(([nominal, count]) => (
        <tr className="Table__row Table__row--body" key={nominal + count}>
          <td className="Table__cell">{`${count} RUR`}</td>
          <td className="Table__cell">{`${nominal} pcs`}</td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr className="Table__row Table__row--footer">
        <td className="Table__cell">Amount:</td>
        <td className="Table__cell">{amount}</td>
      </tr>
    </tfoot>
  </table>
));