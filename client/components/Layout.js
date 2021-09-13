import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

function Layout(props) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content='Test React Developer' />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
