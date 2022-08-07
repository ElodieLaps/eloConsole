import Head from "next/head";
import { ReactElement } from "react";

type LayoutProps = {
   className?: string;
   title: string;
   children: ReactElement | ReactElement[];
}

export const Layout = ({ className, title, children }: LayoutProps) => {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>
         <div className={className}>{children}</div>
      </>
   )
}

export default Layout;