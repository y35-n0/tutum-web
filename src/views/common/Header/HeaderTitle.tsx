/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import titleImg from "../../../assets/title.svg";

const divStyle = css`
  display: flex;
  align-items: center;
`;

const spanStyle = css`
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
`;

type Props = {
  title: string;
};

export const HeaderTitle: React.FC<Props> = (props) => {
  return (
    <div css={divStyle}>
      <img src={titleImg} alt="title logo" />
      <span css={spanStyle}>{props.title}</span>
    </div>
  );
};
