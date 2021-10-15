type Props = {
  count: number;
};

const CountBoardEmployeeHeader: React.FC<Props> = (props) => {
  return (
    <div className="graph-title">
      <span className="graph-titleName">근로자 현황</span>
      <span className="totalValue">TOTAL : {props.count}</span>
    </div>
  );
};

export default CountBoardEmployeeHeader;
