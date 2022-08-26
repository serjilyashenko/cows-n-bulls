import { ReactElement } from "react";
import { TGuessResult } from "../hooks/guess-results-types";
import resultsStyles from "./Result.module.scss";

type PropsType = {
  results: Array<TGuessResult>;
};

export function Results(props: PropsType): ReactElement {
  const { results } = props;

  return (
    <table className={resultsStyles.results_table}>
      <tbody>
        {[...results].reverse().map((guessResult: TGuessResult, index) => (
          <tr key={guessResult.guess + index}>
            <td>{guessResult.guess}:</td>
            <td>🐄x{guessResult.hint.cows}</td>
            <td>🐂x{guessResult.hint.bulls}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
