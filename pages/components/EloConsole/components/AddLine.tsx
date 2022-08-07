import styles from '../../../../styles/EloConsole.module.scss';
import Button from '../../_atoms/Button';
import { addLine, handleWritting } from '../reducer';
import { AddLineProps } from '../types';

const AddLineInput = ({
   baseLine,
   textLines,
   inputFocusRef,
   newLine,
   dispatch }: AddLineProps) => {
   return (
      <div className={styles.eloConsole__input}>
         <div className={styles.eloConsole__baseLine}>
            {baseLine}
         </div>
         <input
            ref={inputFocusRef}
            maxLength={50}
            className={styles.eloConsole__textField}
            type="text"
            value={newLine}
            onChange={(event) => handleWritting(dispatch, event)}
            onKeyPress={(event) => {
               event.key === "Enter" && addLine(dispatch, textLines, baseLine, newLine)
            }}
         />
      </div>
   )
}

const AddLineComponent = ({
   baseLine,
   textLines,
   inputFocusRef,
   newLine,
   dispatch
}: AddLineProps) => {
   return (
      <div className={styles.eloConsole__addLine}>
         <AddLineInput
            baseLine={baseLine}
            textLines={textLines}
            inputFocusRef={inputFocusRef}
            newLine={newLine}
            dispatch={dispatch}
         />
         {!!newLine.length && (
            <Button
               className={styles.eloConsole__enterButton}
               label="Entrer"
               onClick={() => {
                  addLine(dispatch, textLines, baseLine, newLine)
               }}
            />
         )}
      </div>
   )
}

export default AddLineComponent