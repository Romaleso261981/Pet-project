import Reports from "components/Reports/Reports";
import ReportsBalance from "components/ReportsBalance/ReportsBalance";
import styled from "./ReportsPage.module.scss";

// import IncomeForm from 'components/IncomeForm/IncomeForm';
// import CategoryList from '../../components/CategoryList/CategoryList';
// import ChartCategory from '../../components/ChartCategory/ChartCategory';
// import ChartCategoryMobile from '../../components/ChartCategoryMobile/ChartCategoryMobile';
// import { useMediaQuery } from 'react-responsive';

const ReportsPage = () => {
  // const isMobile = useMediaQuery({
  //   query: '(min-width: 767px)',
  // });
  return (
    <>
      <div className={styled.container}>
        <div className={styled.wrapper}></div>
        {/* <ReportsBalance /> */}
        <Reports />
      </div>

      {/* <CategoryList /> */}
      {/* {isMobile ? <ChartCategory /> : <ChartCategoryMobile />} */}
    </>
  );
};
export default ReportsPage;
