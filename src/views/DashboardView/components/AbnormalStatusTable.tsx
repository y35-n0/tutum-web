const items: AbnormalStatusTableRowItem[] = [
  {
    timestamp: Date(),
    dangerLevel: "주의",
    dangerLevelColor: "#666",
    content: "심박수 이상",
    userName: "홍길동",
    userType: "근로자",
    workingStatus: "업무 중",
    isUndefined: true,
  },
  {
    timestamp: Date(),
    dangerLevel: "주의",
    dangerLevelColor: "#666",
    content: "심박수 이상",
    userName: "홍길동",
    userType: "근로자",
    workingStatus: "업무 중",
    isUndefined: true,
  },
  {
    timestamp: Date(),
    dangerLevel: "주의",
    dangerLevelColor: "#666",
    content: "심박수 이상",
    userName: "홍길동",
    userType: "근로자",
    workingStatus: "업무 중",
    isUndefined: true,
  },
];

type AbnormalStatusTableRowItem = {
  timestamp: string;
  dangerLevel: string;
  dangerLevelColor: string;
  content: string;
  userName: string;
  userType: string;
  workingStatus: string;
  isUndefined: boolean;
};

type AbnormalStatusTableRowProps = {
  item: AbnormalStatusTableRowItem;
};

const AbnormalStatusTableRow: React.FC<AbnormalStatusTableRowProps> = ({
  item,
}) => {
  return (
    <tr className="tbody-tr">
      <td className="th-one">{item.timestamp}</td>
      <td className="th-two" color={item.dangerLevelColor}>
        {item.dangerLevel}
      </td>
      <td className="th-three">{item.content}</td>
      <td className="th-four">{item.userName}</td>
      <td className="th-five">{item.userType}</td>
      <td className="th-six">{item.workingStatus}</td>
      <td className="th-seven">{item.isUndefined ? "미확인" : "조치 중"}</td>
    </tr>
  );
};

const AbnormalStatusTableBody: React.FC = ({ children }) => {
  return <tbody className="tableBox">{children}</tbody>;
};

const AbnormalStatusTableHeader: React.FC = ({ children }) => {
  return (
    <thead>
      <tr>
        <th className="th-one">발생시간</th>
        <th className="th-two">위험수준</th>
        <th className="th-three">이상상태 내용</th>
        <th className="th-four">이름</th>
        <th className="th-five">분류</th>
        <th className="th-six">근무 상태</th>
        <th className="th-seven">처리 상태</th>
      </tr>
    </thead>
  );
};

const AbnormalStatusTableBox: React.FC = ({ children }) => {
  return (
    <section className="section-three">
      <p className="table-title">이상상태 현황</p>

      <div className="table-container">
        <table width="100%" cellSpacing="0">
          {children}
        </table>
      </div>
    </section>
  );
};

const AbnormalStatusTable: React.FC = () => {
  return (
    <AbnormalStatusTableBox>
      <AbnormalStatusTableHeader />
      <AbnormalStatusTableBody>
        {items.map((item) => (
          <AbnormalStatusTableRow item={item} />
        ))}
      </AbnormalStatusTableBody>
    </AbnormalStatusTableBox>
  );
};
export default AbnormalStatusTable;
