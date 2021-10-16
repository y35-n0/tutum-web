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
          <th key={headerName.id}>{headerName.name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableBoardHeader;
