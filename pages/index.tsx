import Head from 'next/head';
import Layout from '@components/Layout';
import Skills from '@components/Skills';
import Projects from '@components/Projects';
import HomeTitle from '@components/HomeTitle';

export default function Home() {
  return (
    <Layout title={<HomeTitle />}>
      <Head>
        <title>Jason Newington - Developer, Designer and Geek</title>
      </Head>
      <Skills />
      <Projects />
    </Layout>
  );
}
