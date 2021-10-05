import React, { useEffect, useState } from "react";
import { deserialize } from "typescript-json-serializer";
import { AbnormalState } from "../../../@types/dashboardAPITypes";
import { UserInfo } from "../../../@types/userAPITypes";
import { Table, TableBody, TableHeader } from "../../components/Table";
import Popout from "../../components/Popout";
import MapView from "../../MapView/MapView";
import { useQuery } from "react-query";
import { getAbnormalStates } from "../../../api/dashboardApi";

// useQuery prarms
const REFETCH_INTERVAL_MS = 1000;

// UserPopout params
type UserPopoutProps = {
  name: string;
  id: number;
};

// Table params
const keyIndecator = (abnormalState: AbnormalState) => abnormalState.id;
const valueIndecator = (abnormalState: AbnormalState) => [
  abnormalState.datetime.toLocaleString(),
  abnormalState.state.level,
  abnormalState.state.content,
  abnormalState.user.name,
  abnormalState.user.title,
  abnormalState.user.workingCondition,
  abnormalState.actionStatus,
];
const handleClickPropsIndecator = (abnormalState: AbnormalState) =>
  abnormalState.user;
const headerNames = [
  "발생일시",
  "위험 수준",
  "내용",
  "이름",
  "분류",
  "근무 상태",
  "처리 상태",
];

// Abnormal State Table
const AbnormalStateTable: React.FC<{}> = () => {
  // Map Popout
  const [userPopout, setUserPopout] = useState<UserPopoutProps | null>(null);

  // TODO: to useQuery
  const {
    data: abnormalStates,
    error,
    isLoading,
  } = useQuery("abnormalState", () => getAbnormalStates(), {
    refetchInterval: REFETCH_INTERVAL_MS,
    onSuccess: (data) =>
      data.map((datum) => deserialize<AbnormalState>(datum, AbnormalState)),
  });

  const setupUserPopout = (user: UserInfo) => {
    setUserPopout({
      name: user.name,
      id: user.id,
    });
  };

  // When error occurs or loading data
  if (error) throw new Error();
  if (isLoading) return <p>Loading...</p>;

  // When data is fetched normally
  return (
    <>
      {/* userPopout 정보가 있을 때 현재 위치 popout 표시 */}
      {userPopout && (
        <Popout
          title={`${userPopout.name}의 현재 위치`}
          url=""
          name="location"
          closeWindow={() => {
            setUserPopout(null);
          }}
        >
          <MapView targetId={userPopout.id} />
        </Popout>
      )}
      {/* 이상상태 현황 목록 표시 */}
      <Table>
        <TableHeader headerNames={headerNames} />
        <TableBody
          keyIndecator={keyIndecator}
          valuesIndecator={valueIndecator}
          items={abnormalStates}
          handleClick={setupUserPopout}
          handleClickPropsIndecator={handleClickPropsIndecator}
        />
      </Table>
    </>
  );
};

export default AbnormalStateTable;
