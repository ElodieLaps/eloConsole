import { memo, useEffect, useReducer, useRef } from 'react';
import styles from '../../../styles/EloConsole.module.scss';
import { isEqual } from '../../utils';
import AddLineComponent from './components/AddLine';
import ClearButton from './components/ClearButton';
import TextLinesComponent from './components/TextLines';
import ToogleButton from './components/ToogleButton';
import { eloConsoleReducer, initialState } from './reducer';

const EloConsole = () => {
   const [state, dispatch] = useReducer(eloConsoleReducer, initialState);
   const scrollBottomRef = useRef<HTMLDivElement | null>(null);
   const inputFocusRef = useRef<HTMLInputElement | null>(null);

   const handleClickFocus = (event: React.MouseEvent<HTMLDivElement | MouseEvent>) => {
      event.preventDefault();
      event.stopPropagation();
      inputFocusRef?.current?.focus();
   };

   useEffect(() => {
      scrollBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
   }, [state.textLines.length]);

   return (
      <div
         className={styles.container}
         onClick={(event) => handleClickFocus(event)}
      >
         <div className={styles.eloConsole}>
            <ToogleButton
               label="</>"
               dispatch={dispatch}
               consoleDisplay={state.consoleDisplay}
            />
            {state.consoleDisplay && (
               <>
                  <div className={styles.eloConsole__container}>
                     <TextLinesComponent
                        textLines={state.textLines}
                        scrollBottomRef={scrollBottomRef}
                     />
                     <AddLineComponent
                        baseLine={state.baseLine}
                        textLines={state.textLines}
                        inputFocusRef={inputFocusRef}
                        newLine={state.newLine}
                        dispatch={dispatch}
                     />
                  </div>
                  <ClearButton
                     newLine={state.newLine}
                     textLines={state.textLines}
                     dispatch={dispatch}
                  />
               </>
            )}
         </div>
      </div >
   )
}
// pour l'instant ça sert à rien
export default memo(EloConsole, isEqual);

