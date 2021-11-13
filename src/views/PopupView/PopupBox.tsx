/** @jsxImportSource @emotion/react  */
import { css } from "@emotion/react";

const style = css`
  right: 0;
  top: 0;
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.1);
`;

const PopupBox: React.FC = (props) => {
  return <div css={style}>{props.children}</div>;
};
export default PopupBox;
