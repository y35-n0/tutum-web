/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const headerStyle = css`
  font-weight: 500;
  color: #333;
  height: 55px;
  font-size: 15px;
`;

export type HeaderNames = {
  id: string;
  name: string;
};

type Props = {
  headerNames: HeaderNames[];
};

const TableBoardHeader: React.FC<Props> = (props) => {
  return (
    <thead>
      <tr>
        {props.headerNames.map((headerName) => (
          <th css={headerStyle} key={headerName.id}>
            {headerName.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableBoardHeader;
