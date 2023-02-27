import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import categoriesExpens from '../../utils/categoriesExpens.json';
import categoriesIncome from '../../utils/categoriesIncome.json';
import icon from '../../assets/icons/icon.svg';
import s from '../ReportsCategories/ReportsCategories.module.scss';

export default function ReportsCategoryList({
  categories,
  transType,
  curCategory,
  setCurCategory,
}) {
  const [categoriesArr, setCategoriesArr] = useState([]);

  useEffect(() => {
    categoriesArr[0] ? setCurCategory(categoriesArr[0]) : setCurCategory(null);
  }, [categoriesArr, setCurCategory]);

  const getTransleteCategories = () => {
    const categoriesOptions =
      transType === 'expenses' ? categoriesExpens : categoriesIncome;
    return categoriesOptions.map(el => ({
      ...el,
      data: categories[transType + 'Data'][el.ru] || { total: 0 },
    }));
  };

  useEffect(() => {
    if (Object.keys(categories).length) {
      setCategoriesArr(
        getTransleteCategories(categories).filter(el => el.data.total)
      );
    }
    // eslint-disable-next-line
  }, [categories]);

  return (
    <div className={s.categoryListContainer}>
      <ul className={s.categoryList}>
        {categoriesArr.length
          ? categoriesArr.map((el, id) => (
              <li
                key={id}
                onClick={() => setCurCategory(el)}
                className={`${s.categoryListItem} ${
                  curCategory?.en === el?.en ? s.isActive : ''
                }`}
              >
                <p className={s.priceItem}>
                  {el.data.total &&
                    el.data.total
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + '.00'}{' '}
                </p>
                <div className={s.borderForIconRelative}>
                  <div
                    className={`${s['borderForIcon' + el.icon]} 
                   ${s.borderForHover}
                   `}
                  ></div>
                  <svg className={s.iconFill} width={56} height={56}>
                    <use href={`${icon}#icon-${el.icon}`} />
                  </svg>
                </div>
                <p className={s.discriptionItem}>{el.en}</p>
              </li>
            ))
          : "You don't have operations on this period"}
      </ul>
    </div>
  );
}
