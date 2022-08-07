import styles from '../../../../styles/EloConsole.module.scss';
import Button from "../../_atoms/Button";
import { reset, toogleConsole } from "../reducer";
import { ToogleButtonProps } from "../types";

const ToogleButton = ({
   label,
   dispatch,
   consoleDisplay
}: ToogleButtonProps) => {
   return (
      <Button
         className={styles.eloConsole__toogleButton}
         label={label}
         onClick={() => {
            reset(dispatch);
            toogleConsole(dispatch, !consoleDisplay)
         }}
      />
   )
}

export default ToogleButton;