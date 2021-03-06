/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import {
  DANGER_LEVEL,
  DANGER_LEVEL_COLOR,
} from "../../../constants/stateConstants";

export const formattingDate = (date: Date): string => {
  return format(date, "yyyy.MM.dd (ccc)  aa hh:mm:ss", { locale: ko });
};

const GlobalStyle: React.FC = (props) => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap");

        :root {
          --title-color: #0b4ca3;
          --danger-color: ${DANGER_LEVEL_COLOR[DANGER_LEVEL.DANGER]};
          --box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.05);
          --width: 1280px;
        }

        * {
          margin: 0;
          padding: 0;
          text-decoration: none;
          list-style: none;
        }

        .App {
          font-family: "Noto Sans KR", sans-serif;
          color: #444;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: #f3f3f3;
          overflow-x: hidden;
          align-items: center;
        }

        img {
          margin-right: 10px;
        }
      `}
    />
  );
};

export default GlobalStyle;
