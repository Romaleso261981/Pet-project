import styled from "styled-components";

// import BgCabbage from '../images/double_kapustas.png';
import BgImage2mob from "../../assets/image/home_bg_mobile.png";
import BgImage2tabDesk from "../../assets/image/home_bg.png";

export const Container = styled.main`
  position: relative;
  overflow: hidden;
  padding: 86px 20px 105px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* z-index: -20000; */
  /* background-color: ${(p) => p.theme.colors.bodyColor}; */
  /* background-image: url(${BgImage2mob});
  background-position: 110% 104px;
  background-repeat: no-repeat;
  background-size: 83px 89px; */
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 117px 171px 156px 171px;
    /* background-image: url(${BgImage2tabDesk});
    background-position: 0 28px;
    background-repeat: no-repeat;
    background-size: contain; */
  }

  @media screen and (min-width: 1280px) {
    padding: 117px 91px 125px 91px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    gap: 157px;
  }
`;
