/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const boxStyle = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MapBox: React.FC = (props) => {
  return <div css={boxStyle}>{props.children}</div>;
};

export default MapBox;
