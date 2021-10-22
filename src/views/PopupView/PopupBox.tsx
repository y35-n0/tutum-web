/** @jsxImportSource @emotion/react  */
import { css } from "@emotion/react";

const style = css`
  z-index: 10;
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: var(--box-shadow);
`;

const PopupBox: React.FC = (props) => {
  return <div css={style}>{props.children}</div>;
};
export default PopupBox;
