/** @jsxImportSource @emotion/react  */
import { css } from "@emotion/react";

const style = css`
  z-index: 10;
  position: fixed;
  height: 100%;
  overflow: auto;
  right: 0;
  top: 0;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
    border-radius: 10px;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: #e2e2e2;
  }
`;

const AbnormalStatePopupBox: React.FC = (props) => {
  return <div css={style}>{props.children}</div>;
};

export default AbnormalStatePopupBox;
