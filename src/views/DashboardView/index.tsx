import Header from "../common/Header";
import BoardCount from "./components/BoardCount";
import BoardTable from "./components/BoardTable";
import GlobalStyle from "../common/GlobalStyle";
import NavigatorAndTime from "../common/NavigatorAndTime";
import PopupView from "../PopupView";
import InWrapper from "../common/Wrapper/InWrapper";
import OutWrapper from "../common/Wrapper/OutWrapper";
import { useQuery } from "react-query";
import { getAbnormalStates } from "../../api/dashboardApi";
import { MouseEventHandler, useEffect, useState } from "react";
import { AbnormalState } from "../../types/dashboardTypes";

const REFETCH_INTERVAL_MS = 1000;
const DashboradView: React.FC = () => {
  const { data: states } = useQuery("abnormalStates", getAbnormalStates, {
    initialData: [],
    refetchInterval: REFETCH_INTERVAL_MS,
    onSuccess: (states) => {},
  });

  const [showingStates, setShowingStates] = useState<AbnormalState[]>([]);

  useEffect(() => {
    console.log(states);
  }, [states]);

  // TODO: setShowingStates을 이용해서 필터링 된 상태로 변경
  const handleClick: MouseEventHandler = (e) => {};

  return (
    <>
      <GlobalStyle />
      <Header />
      <OutWrapper>
        <NavigatorAndTime />
        <PopupView states={states!} />
        <InWrapper>
          <BoardCount states={states!} handleClick={handleClick} />
          <BoardTable states={showingStates} />
        </InWrapper>
      </OutWrapper>
    </>
  );
};

export default DashboradView;
