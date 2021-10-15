export type CountBoardEmployeeLegendItemContent = {
  content: string;
  count: number;
};

type Props = {
  item: CountBoardEmployeeLegendItemContent;
};

const CountBoardEmployeeLegendItem: React.FC<Props> = (props) => {
  return (
    <li className="input-graphTitle">
      <span></span>
      <p className="graphTitle-value">
        {props.item.content} : {props.item.count}
      </p>
    </li>
  );
};

export default CountBoardEmployeeLegendItem;
