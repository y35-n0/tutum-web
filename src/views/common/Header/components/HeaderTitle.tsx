/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import titleImg from "../../../../assets/title.svg";

const titleNameStyle = css`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
`;

const imgStyle = css`
  margin-right: 10px;
`;

type Props = {
  title: string;
};

export const HeaderTitle: React.FC<Props> = (props) => {
  return (
    <div className="titleName" css={titleNameStyle}>
      <img src={titleImg} alt="title logo" css={imgStyle} />
      <h1>{props.title}</h1>
    </div>
  );
};
