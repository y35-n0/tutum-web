const checked = "dashboard";

const items = [
  {
    name: "대시보드",
    value: "dashboard",
  },
  {
    name: "근로자 관리",
    value: "dashboard",
  },
  {
    name: "이상상태 커스터마이징",
    value: "dashboard",
  },
];

const Timestamp: React.FC = () => {
  const current_time = Date();

  return (
    <div className="thisTime">
      <img src="/assets/time.svg" alt="time" />
      <p className="time">현재시각 :&nbsp; {current_time}</p>
    </div>
  );
};

type NavigatorItem = {
  name: string;
  value: string;
};

type NavigatorButtonItemProps = {
  item: NavigatorItem;
  checked: boolean;
};

const NavigatorButtonItem: React.FC<NavigatorButtonItemProps> = ({
  item,
  checked,
}) => {
  return (
    <label className="titleInput">
      <input
        type="radio"
        name="titleInput"
        value={item.value}
        checked={checked}
      />
      <span>{item.name}</span>
    </label>
  );
};

const NavigatorForm: React.FC = ({ children }) => {
  return <form className="title-inputBox">{children}</form>;
};

const Navigator: React.FC = () => {
  return (
    <section className="navigator">
      <NavigatorForm>
        {items.map((item) => (
          <NavigatorButtonItem
            item={item}
            checked={item.value === checked}
          ></NavigatorButtonItem>
        ))}
      </NavigatorForm>
      <Timestamp />
    </section>
  );
};

export default Navigator;
