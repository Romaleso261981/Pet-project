import Reports from "components/Reports/Reports";
import Balance from "components/Balance/Balance";
import styled from "./ReportsPage.module.scss";

// import IncomeForm from 'components/IncomeForm/IncomeForm';
// import CategoryList from '../../components/CategoryList/CategoryList';
// import ChartCategory from '../../components/ChartCategory/ChartCategory';
// import ChartCategoryMobile from '../../components/ChartCategoryMobile/ChartCategoryMobile';
// import { useMediaQuery } from 'react-responsive';

const ReportsPage = () => {
  // const isMobile = useMediaQuery({
  //   query: "(min-width: 767px)",
  // });
  return (
    <>
      <div className={styled.container}>
        <div className={styled.wrapper}></div>
        {/* <ReportsBalance /> */}
        <h1>ReportsBalance</h1>
        <Reports />
      </div>

      {/* <CategoryList /> */}
      <h1>CategoryList</h1>
      {true ? <h1>ChartCategory</h1> : <h1>ChartCategoryMobile</h1>}
      {/* {isMobile ? <ChartCategory /> : <ChartCategoryMobile />} */}
    </>
  );
};
export default ReportsPage;
