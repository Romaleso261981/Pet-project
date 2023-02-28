
import { useMediaQuery } from 'react-responsive';
import s from './ReportsBalance.module.scss';
import Balance from '../Balance/Balance';
import Pagination from 'components/Pagination/Pagination';
import GooBack from 'components/GooBack/GooBack';

const ReportsBalance = () => {
  const mob = useMediaQuery({ query: '(max-width: 767.5px)' });
  

  return (
    <section className={s.section}>
        <div className={s.wrapPagination}>
          <Pagination />
      </div>
      <div className={s.balance}>
      <Balance />
        </div>
        <div className={s.goBack}>
          <GooBack title={!mob && 'Main page'}/>
        </div>
    </section>
  );
};

export default ReportsBalance;
