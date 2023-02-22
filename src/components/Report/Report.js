// import React from 'react';
// import { useSelector } from 'react-redux';

// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// import s from './Report.module.css';

// import Balance from '../Balance';
// import { getTransactionsPerMonth } from 'redux/transactions/transactions-selectors';
// import { CurrentAmount, CurrentMonth } from './';
// import expenseIconCategories from 'data/expenseIcon';
// import incomeIconCategories from 'data/incomeIcon';
// import sprite from './icon.svg';
// import ArrowToGoBack from '../ArrowToGoBack';

// const Report = ({
//   month,
//   year,
//   type,
//   onHandleClickRight,
//   onHandleClickLeft,
//   getCategory,
//   onHandleChangeType,
// }) => {
//   const transaction = useSelector(getTransactionsPerMonth);

//   const getTransactionByType = type => {
//     const filteredByType = transaction.filter(
//       transaction => transaction.type === type,
//     );
//     return filteredByType;
//   };

//   const findTotalSumByCategory = (type, category) => {
//     let totalExpense = 0;
//     getTransactionByType(type)
//       .filter(tr => tr.category === category)
//       .map(el => (totalExpense += el.sum));
//     return totalExpense;
//   };

//   const categories =
//     type === 'expense' ? expenseIconCategories : incomeIconCategories;

//   return (
//     <div className={s.reportContainer}>
//       <div className={`${s.navigation} ${s.section}`}>
//         <ArrowToGoBack />
//         <div className={s.navigationWrapper}>
//           <Balance width={true} hide={s.buttonNone} />
//           <CurrentMonth
//             currentMonth={month}
//             currentYear={year}
//             onHandleClickRight={onHandleClickRight}
//             onHandleClickLeft={onHandleClickLeft}
//           />
//         </div>
//       </div>
//       <CurrentAmount />
//       <div className={`${s.reportWrapper} ${s.section}`}>
//         <div className={`${s.transactionWrapper} ${s.sectionReportTitle}`}>
//           <ArrowBackIosIcon
//             style={{ color: '#FF751D', cursor: 'pointer' }}
//             fontSize="small"
//             onClick={onHandleChangeType}
//           />
//           {type === 'expense' ? (
//             <h1 className={s.reportTitle}>expenses:</h1>
//           ) : (
//             <h1 className={s.reportTitle}>income:</h1>
//           )}
//           <ArrowForwardIosIcon
//             style={{ color: '#FF751D', cursor: 'pointer' }}
//             fontSize="small"
//             onClick={onHandleChangeType}
//           />
//         </div>
//         <ul className={s.reportList}>
//           {getTransactionByType(type).length === 0 ? (
//             <p>
//               The report will be available after you enter your details
//                income and expenses for the selected period.
//             </p>
//           ) : (
//             categories.map(event => {
//               let sum = findTotalSumByCategory(type, event.label);
//               if (sum === 0) {
//                 return null;
//               }

//               return (
//                 <li className={s.reportCard} key={event.id}>
//                   <p>{`${sum.toLocaleString('ru')}.00`}</p>
//                   <svg
//                     className={s.iconSvg}
//                     title={event.label}
//                     onClick={getCategory}
//                   >
//                     <use
//                       xlinkHref={`${sprite}#${event.label}`}
//                       title={event.label}
//                     />
//                   </svg>
//                   <p className={s.reportCardTitle}>{event.label}</p>
//                 </li>
//               );
//             })
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default Report;
