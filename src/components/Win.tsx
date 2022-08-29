import { ReactElement } from "react";
import winStyles from "./Win.module.scss";

type TProps = {
  tries: number;
  onNext: () => void;
};

export function Win(props: TProps): ReactElement {
  const { tries, onNext } = props;

  return (
    <>
      <div className={winStyles.win}>
        <div>🎆You WIN ({tries} tries)</div>
      </div>
      <div className={winStyles.bear_container}>
        <img
          src="/happy-bear.gif"
          className={winStyles.happy_bear}
          alt="Happy Bear"
        />
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
}
