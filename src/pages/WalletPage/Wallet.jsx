import Balance from "../../components/Balance/Balance";
import { notifySettings } from "../../utils/notifySettings";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLang } from "../../redux/lang/langSelectors";
import { userBalance } from "../../redux/balance/selectorBalance";
import styled from "./Wallet.module.scss";
import {NavLink} from "../../components/NavLink/NavLink";
import { Transactions } from "../../components/Transactions/Transactions";
import { Btn } from "../../components/Buttons/Btn";
import UniversalModal from "../../components/Modals/UniversalModal/UniversalModal";

const Wallet = ({ isHintShown, setIsHintShown }) => {
  const savedBalance = Number(useSelector(userBalance)).toFixed(2);
  const lang = useSelector(getLang).lang;

  const [isModalActive, setIsModalActive] = useState(false);

  const toggleModal = () => {
    setIsModalActive(!isModalActive);
  };
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
        <div className={styled.wrapper}>
          <div className={styled.transaction_all}>
          <div className={styled.BtnsWrapper}>
          {/* <Btn type="submit" text="добавити" /> */}
          <NavLink text="Добавити" to="/" />          
        </div>
            <Transactions toggleModal={toggleModal} />
            {isModalActive && <UniversalModal toggleModal={toggleModal} />}
            {/* <Btn
              text="кнопка"
              onClick={toggleModal}
              formTitle="Логін"
              btnText="Логін"
              navLinkText="Реєстрація"
              navLinkAdress="/wallet"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Wallet;
