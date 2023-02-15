import { LayoutProps } from './Leyout.props';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { FunctionComponent } from 'react';


const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Header/>
      <div>
        <Sidebar/>
        <div>
          {children}
        </div>
      </div>
      <Footer/>
    </>
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