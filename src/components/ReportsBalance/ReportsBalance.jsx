import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import s from './ReportsBalance.module.scss';
import Balance from '../Balance/Balance';
// import LinkReports from 'components/LinkReports/LinkReports';
import Pagination from 'components/Pagination/Pagination';
import GooBack from 'components/GooBack/GooBack';

const ReportsBalance = () => {
  const location = useLocation();
  const mob = useMediaQuery({ query: '(max-width: 767.5px)' });
  const isReportsPage = location.pathname.slice(1, 8) === 'reports';

  return (
    <section className={s.section}>
      {/* {!isReportsPage && <LinkReports location={location} />} */}
      {isReportsPage && (
        <div className={s.wrapPagination}>
          <Pagination />
        </div>
       )} 
      <Balance isReportsPage={isReportsPage} />

      {/* {isReportsPage && ( */}
        <div className={s.goBack}>
          <GooBack title={!mob && 'Main page'} isReportsPage={isReportsPage} />{' '}
        </div>
      {/* )} */}
    </section>
  );
};

export default ReportsBalance;
