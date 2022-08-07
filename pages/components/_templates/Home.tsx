import EloConsole from "../EloConsole"
import Footer from "../Footer"
import Header from "../Header"
import Page from "../Page"
import styles from '../../../styles/Home.module.scss'

const Main = () => {
   return (
      < div className={styles.home}>
         <div className={styles.eloConsoleContainer}>
            <EloConsole />
         </div>
      </div>
   )
}

const HomeTemplate = () => {
   return (
      <Page
         title="accueil"
         header={<Header />}
         main={<Main />}
         footer={<Footer />}
      />
   )
}

export default HomeTemplate