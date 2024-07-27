import { StyledButton, ButtonImg } from "./styles";

import { ButtonProps } from "./types";

function Button({
  id = "",
  imgSrc = undefined,
  type = "button",
  name = "Send",
  onClick,
  disabled = false,
  isRed = false
}: ButtonProps) {
  return (
    <StyledButton id={id} $isRed={isRed} disabled={disabled} onClick={onClick} type={type}>
      {/* Если imgSrc === true, то правая часть после && показывается на странице
      Если imgSrc === false, то правая часть после && скрывается */}
      {imgSrc && <ButtonImg src={imgSrc} />}
      {!imgSrc && name}
    </StyledButton>
  );
}

export default Button;