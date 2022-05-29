import Head from 'next/head';
import Header from '@components/Header';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

interface IProps {
  children: React.ReactNode;
  title?: React.ReactNode;
}

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, title }: IProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
      </Head>
      <Navbar />
      <Header title={title} />
      {children}
      <Footer />
    </div>
  );
}
