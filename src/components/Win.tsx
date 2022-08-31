import { ReactElement } from "react";
import happyBearPath from "../assets/happy-bear.gif";
import winStyles from "./Win.module.scss";

type TProps = {
  riddle: string;
  tries: number;
  onNext: () => void;
};

export function Win(props: TProps): ReactElement {
  const { riddle, tries, onNext } = props;

  return (
    <>
      <div className={winStyles.win}>
        <div>
          <span className={winStyles.riddle_value}>🎉{riddle}🎉</span> ({tries}{" "}
          tries)
        </div>
      </div>
      <div className={winStyles.bear_container}>
        <img
          src={happyBearPath}
          className={winStyles.happy_bear}
          alt="Happy Bear"
        />
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
}
