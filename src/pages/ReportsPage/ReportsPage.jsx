import Reports from "components/Reports/Reports";
import styled from "./ReportsPage.module.scss";
// import IncomeForm from 'components/IncomeForm/IncomeForm';
// import CategoryList from '../../components/CategoryList/CategoryList';
// import ChartCategory from '../../components/ChartCategory/ChartCategory';
// import ChartCategoryMobile from '../../components/ChartCategoryMobile/ChartCategoryMobile';
// import { useMediaQuery } from 'react-responsive';
// import Balance from '../../components/Balance/Balance';

const ReportsPage = () => {
  // const isMobile = useMediaQuery({
  //   query: '(min-width: 767px)',
  // });
  return (
    <>
      <div className={styled.container}>
        <div className={styled.wrapper}></div>
        {/* <Balance /> */}
        <Reports />
      </div>

      {/* <CategoryList /> */}
      {/* {isMobile ? <ChartCategory /> : <ChartCategoryMobile />} */}
    </>
  );
};
export default ReportsPage;
