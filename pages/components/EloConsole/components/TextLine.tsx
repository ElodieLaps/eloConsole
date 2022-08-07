import styles from '../../../../styles/EloConsole.module.scss';
import { TextLineProps } from '../types';

const TextLineComponent = ({ line, scrollBottomRef }: TextLineProps) => {
   return (
      <>
         <div className={styles.eloConsole__textLine}>
            {!!line.baseLine.length && (
               <span className={styles.eloConsole__baseLine}>
                  {line.baseLine}
               </span>
            )}
            <span
               dangerouslySetInnerHTML={{ __html: line.contentLine }}
            />
         </div>
         <div ref={scrollBottomRef} />
      </>
   )
}

export default TextLineComponent