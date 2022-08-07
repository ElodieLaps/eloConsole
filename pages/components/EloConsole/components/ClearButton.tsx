import styles from '../../../../styles/EloConsole.module.scss';
import Button from "../../_atoms/Button";
import { clear } from "../reducer";
import { ClearButtonProps } from '../types';

const ClearButton = ({ newLine, textLines, dispatch }: ClearButtonProps) => {
   const isClearable = (!!newLine.length || !!textLines.length)

   return (
      <>
         {isClearable && (
            <Button
               className={styles.eloConsole__clearButton}
               onClick={() => clear(dispatch)}
               label="clear"
            />
         )}
      </>
   )
}

export default ClearButton