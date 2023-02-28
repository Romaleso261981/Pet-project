// import { Transaction } from "components/Transaction/Transaction";
// import TableTransaction from "components/TableTransaction/TableTransaction";
import Balance from "components/Balance/Balance";
import { notifySettings } from "../../utils/notifySettings";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getLang } from "../../redux/lang/langSelectors";
import userBalance from "../../redux/balance/selectorBalance";
import styled from "./Wallet.module.scss";
import { Transactions } from "components/Transactions/Transactions";

const Wallet = ({ isHintShown, setIsHintShown }) => {
  const savedBalance = Number(useSelector(userBalance)).toFixed(2);
  const lang = useSelector(getLang).lang;
  useEffect(() => {
    if (isHintShown) {
      return;
    }
    if (savedBalance < 0) {
      lang === "en"
        ? Notiflix.Notify.info(
            `&#9757; Oops, you have negative balance`,
            notifySettings
          )
        : Notiflix.Notify.info(
            `&#9757; Ой, у вас негативний баланс`,
            notifySettings
          );
      setIsHintShown(true);
    }
  }, [isHintShown, lang, savedBalance, setIsHintShown]);
  return (
    <>
      <div className={styled.container}>
        <Balance />
        <div className={styled.wrapper}>
          <div className={styled.transaction_all}>
            <div className={styled.transaction}>
              <Transaction />
              <TableTransaction />
            </div>
            <TableSummary className={styled.transaction__summary} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Wallet;
