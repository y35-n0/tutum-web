/** @jsxImportSource @emotion/react  */
import { css } from "@emotion/react";

// FIXME: popup 위치 수정
const style = css`
  position: absolute;
  right: 0;
  top: 0;
  background-color: #fff;
  padding: 20px 16px;
  border-radius: 20px;
  box-shadow: var(--box-shadow);

  /* 팝업 간격은 margin-bottom 아래 표기해뒀습니다. */
  margin-bottom: 20px;
  margin-bottom: 20px;
`;

const PopupBox: React.FC = (props) => {
  return <div css={style}>{props.children}</div>;
};
export default PopupBox;
