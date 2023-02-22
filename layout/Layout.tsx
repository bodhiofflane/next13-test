import { LayoutProps } from './Leyout.props';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { FunctionComponent } from 'react';

import styles from './Layout.module.css';

const Layout = ({children}: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header}/>
      <Sidebar className={styles.sidebar}/>
      <div className={styles.body}>
          {children}
      </div>
      <Footer className={styles.footer}/>
    </div>
  );
}

// Мы будем оборачивать переданный суюда компонент в <Layout>. Нужно ли выносить в отдельный файл.
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props}/>
      </Layout>
    )
  }
}