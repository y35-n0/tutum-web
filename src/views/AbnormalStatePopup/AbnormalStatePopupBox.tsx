/** @jsxImportSource @emotion/react  */
import { css } from "@emotion/react";

const style = css`
  z-index: 1000;
  position: fixed;
  height: 100%;
  overflow: scroll;
  top: 0;
  right: 0;
`;

const AbnormalStatePopupBox: React.FC = (props) => {
  return <div css={style}>{props.children}</div>;
};

export default AbnormalStatePopupBox;
