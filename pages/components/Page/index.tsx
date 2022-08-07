import { ReactElement } from "react";
import Layout from "../_atoms/Layout";
import styles from '../../../styles/Page.module.scss';

type PageProps = {
   title: string;
   header: ReactElement | ReactElement[] | null;
   main: ReactElement | ReactElement[];
   footer: ReactElement | ReactElement[] | null;
}

const Page = ({ title, header, main, footer }: PageProps) => {
   return (
      <Layout className={styles.page} title={title}>
         <header className={styles.header}>
            {header}
         </header>
         <main className={styles.main}>
            {main}
         </main>
         <footer className={styles.footer}>
            {footer}
         </footer>
      </Layout>
   )
}
export default Page