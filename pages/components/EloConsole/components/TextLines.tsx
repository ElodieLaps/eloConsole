import styles from "../../../../styles/EloConsole.module.scss";
import { TextLinesProps, TextLineType } from "../types";
import TextLineComponent from "./TextLine";

const TextLinesComponent = ({ textLines, scrollBottomRef }: TextLinesProps) => {
  return (
    <div className={styles.eloConsole__textLines}>
      {!!textLines && (
        <div className={styles.eloConsole__textLines__content}>
          {textLines.map((line: TextLineType, index: number) => {
            return (
              <TextLineComponent
                key={`${line.baseLine}-${index}`}
                line={line}
                scrollBottomRef={scrollBottomRef}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TextLinesComponent;
