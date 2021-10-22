/** @jsxImportSource @emotion/react  */
import { css } from "@emotion/react";

const style = css`
  z-index: 10;
  position: absolute;
  right: 0;
  top: 0;
`;

const PopupSide: React.FC = (props) => {
  return <div css={style}>{props.children}</div>;
};

export default PopupSide;
