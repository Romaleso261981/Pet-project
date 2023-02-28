const incomesMonthSelector = (state) => state.reports.incomes;
const expensesMonthSelector = (state) => state.reports.expenses;
const totalIncomesMonthSelector = (state) => state.incomes.incomeTotal;
const totalExpensesMonthSelector = (state) => state.expenses.expenseTotal;

const isLoadingSelector = (state) => state.isLoading;
const errorSelector = (state) => state.error;

export {
  // ?Вибір доходів за місяця,
  incomesMonthSelector,

  // ?витрати за місяця,
  expensesMonthSelector,

  // ?Загальні надходження за місяця
  totalIncomesMonthSelector,

  // ?загальні витрати за місяця,
  totalExpensesMonthSelector,

  // ?завантаження
  isLoadingSelector,

  // ?помилка
  errorSelector,
};
