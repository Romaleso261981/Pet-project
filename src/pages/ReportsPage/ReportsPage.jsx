import Reports from "components/Reports/Reports";
import ReportsBalance from "components/ReportsBalance/ReportsBalance";
import styled from "./ReportsPage.module.scss";



const ReportsPage = () => {

  return (
    <>
      <div className={styled.container}>
        <ReportsBalance />
        <div className={styled.wrapper}>
          <Reports />
        </div>
        
      </div>

     
    </>
  );
};
export default ReportsPage;
