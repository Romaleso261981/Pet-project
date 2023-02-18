import style from './Balance.module.scss';
import { useState } from 'react';
import { GoGraph } from 'react-icons/go';
import { Container } from '../Container/Container';
import ModalWithoutBalance from '../Modals/ModalWithoutBalance/ModalWithoutBalance';
export const Balance = () => {
  const [balance, setBalance] = useState(0);
  const handleChange = (e) => {
    setBalance(e.target.value);
  };
  return (
    <Container>
      <div className={style.containers}>
        <div className={style.flex}>
          <p className={style.title}>Balance:</p>
          <input
            className={style.inputBalance}
            type="number"
            name="balance"
            placeholder="0.00 UAH"
            style={{ color: '#000000' }}
            value={balance}
            onChange={handleChange}
          />
          {balance === 0 && <ModalWithoutBalance />}

          <button className={style.buttonConfirm}>confirm</button>
        </div>
        <button className={style.report}>
          Reports <GoGraph className={style.icon} />
        </button>
      </div>
    </Container>
  );
};
