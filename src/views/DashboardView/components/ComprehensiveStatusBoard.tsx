const items = [
  {
    title: "종합",
    value: 6,
    inputValue: "comprehensive",
    checked: false,
    isDanger: false,
  },
  {
    title: "위험",
    value: 2,
    inputValue: "danger",
    checked: false,
    isDanger: true,
  },
  {
    title: "미확인",
    value: 3,
    inputValue: "unidentified",
    checked: false,
    isDanger: false,
  },
  {
    title: "통신 이상",
    value: 1,
    inputValue: "communication",
    checked: false,
    isDanger: false,
  },
  {
    title: "환경 이상",
    value: 6,
    inputValue: "nature",
    checked: false,
    isDanger: false,
  },
];

const checked = "comprehensive";

type ComprehensiveStatusItem = {
  title: string;
  value: number;
  inputValue: string;
  isDanger: boolean;
};

type ComprehensiveStatusBoardItemProps = {
  item: ComprehensiveStatusItem;
  checked: boolean;
};

const ComprehensiveStatusBoardItem: React.FC<ComprehensiveStatusBoardItemProps> =
  ({ item, checked }) => {
    return (
      <label className={`dataInput${item.isDanger && " dangerValue"}`}>
        <input
          type="radio"
          name="dataInput"
          value={item.inputValue}
          checked={checked}
        />
        <span>
          <p className="value-title">{item.title}</p>
          <div className="value">{item.value}</div>
        </span>
      </label>
    );
  };

const ComprehensiveStatusBoardBox: React.FC = ({ children }) => {
  return <form className="data-InputBox">{children}</form>;
};

const ComprehensiveStatusBoard: React.FC = () => {
  return (
    <ComprehensiveStatusBoardBox>
      {items.map((item) => (
        <ComprehensiveStatusBoardItem
          item={item}
          checked={item.inputValue === checked}
        />
      ))}
    </ComprehensiveStatusBoardBox>
  );
};

export default ComprehensiveStatusBoard;
