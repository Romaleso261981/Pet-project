import svg from "../../assets/image/icons_sprite.svg";
const { LogoWrapper, MainTitle } = require("./AuthPageLogo.styled");

export const AuthPageLogo = () => {
  return (
    <LogoWrapper>
      <MainTitle>
        <>Хороший майстер</>
        {/* <use href={`${svg}#kapusta-logo`}></use> */}
      </MainTitle>
      <p>Smart Finance</p>
    </LogoWrapper>
  );
};
