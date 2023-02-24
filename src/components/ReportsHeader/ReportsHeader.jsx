import React from 'react';
import s from './ReportsHeader.module.scss';

export default function ReportsHeader({ incomes, expenses }) {
  return (
    <div className={s.reportsHeder}>
      <div className={`${s.total} ${s.total__expenses}`}>
        <p>
          Expenses:
          <span>
            -
            {expenses.expenseTotal &&
              expenses.expenseTotal
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
            UAH
          </span>
        </p>
      </div>
      <div className={`${s.total} ${s.total__incomes}`}>
        <p>
          Income:
          <span>
            +
            {incomes.incomeTotal &&
              incomes.incomeTotal
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
            UAH
          </span>
        </p>
      </div>
    </div>
  );
}
