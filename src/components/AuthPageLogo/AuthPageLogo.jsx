import svg from "../../assets/image/icons_sprite.svg";
const { LogoWrapper, LogoSvg } = require("./AuthPageLogo.styled");

export const AuthPageLogo = () => {
  return (
    <LogoWrapper>
      <LogoSvg>
        <use href={`${svg}#kapusta-logo`}></use>
      </LogoSvg>
      <p>Smart Finance</p>
    </LogoWrapper>
  );
};
