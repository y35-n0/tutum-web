/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import titleImg from "../../../../assets/title.svg";

const titleNameDivStyle = css`
  display: flex;
  align-items: center;
`;

const titleNameH1Style = css`
  font-size: 34px;
  font-weight: bold;
  margin: 0px;
`;

const imgStyle = css`
  margin-right: 10px;
`;

type Props = {
  title: string;
};

export const HeaderTitle: React.FC<Props> = (props) => {
  return (
    <div className="titleName" css={titleNameDivStyle}>
      <img src={titleImg} alt="title logo" css={imgStyle} />
      <h1 css={titleNameH1Style}>{props.title}</h1>
    </div>
  );
};
