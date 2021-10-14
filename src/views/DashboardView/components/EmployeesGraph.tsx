const items = [
  {
    title: "업무 중",
    value: 15,
  },
  {
    title: "휴식 중",
    value: 5,
  },
  {
    title: "방문객",
    value: 5,
  },
  {
    title: "퇴근",
    value: 2,
  },
  {
    title: "알 수 없음",
    value: 2,
  },
];

type EmployeesGraphLegendsItemProps = {
  title: string;
  value: number;
};

const EmployeesGraphLegendsItem: React.FC<EmployeesGraphLegendsItemProps> = ({
  title,
  value,
}) => {
  return (
    <li className="input-graphTitle">
      <span></span>
      <p className="graphTitle-value">
        {title} : {value}
      </p>
    </li>
  );
};

const EmployeesGraphLegendsLine: React.FC = ({ children }) => {
  return <div className="line-one">{children}</div>;
};

const EmployeesGraphLegends: React.FC = ({ children }) => {
  return <ul className="input-graphTitle-box">{children}</ul>;
};

const EmployeesGraphCircle: React.FC = () => {
  return <div className="graph-box"></div>;
};

type EmployeesGraphTitleProps = {
  title: string;
  value: number;
};

const EmployeesGraphTitle: React.FC<EmployeesGraphTitleProps> = ({
  title,
  value,
}) => {
  return (
    <div className="graph-title">
      <p className="graph-titleName">{title}</p>
      <div className="totalValue">Total : {value}</div>
    </div>
  );
};

const EmployeesGraphBox: React.FC = ({ children }) => {
  return <form className="graph-container">{children}</form>;
};

const EmployeesGraph: React.FC = () => {
  return (
    <EmployeesGraphBox>
      <EmployeesGraphTitle title="근로자 현황" value={22} />
      <EmployeesGraphCircle />
      <EmployeesGraphLegends>
        {items.map((item, i) =>
          i % 3 === 0 ? (
            <>
              <EmployeesGraphLegendsLine>
                <EmployeesGraphLegendsItem
                  title={item.title}
                  value={item.value}
                />
              </EmployeesGraphLegendsLine>
            </>
          ) : (
            <EmployeesGraphLegendsItem title={item.title} value={item.value} />
          )
        )}
      </EmployeesGraphLegends>
    </EmployeesGraphBox>
  );
};

export default EmployeesGraph;
