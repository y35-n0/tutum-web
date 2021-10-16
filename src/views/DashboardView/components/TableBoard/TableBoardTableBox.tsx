const TableBoardTableBox: React.FC = (props) => {
  return (
    <div className="table-container">
      <table width="100%" cellSpacing="0">
        {props.children}
      </table>
    </div>
  );
};

export default TableBoardTableBox;
